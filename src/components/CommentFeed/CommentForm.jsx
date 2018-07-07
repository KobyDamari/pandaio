import React from 'react';
import md5 from 'md5'
import './CommentForm.scss'

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {form: null};

        this.handelSubmit = this.handelSubmit.bind(this);
        this.getAvatar = this.getAvatar.bind(this);
        this.postData = this.postData.bind(this);
    }
    handelSubmit(event){
        event.preventDefault();
        const data = new FormData(event.target);
        this.setState({form:data});
        this.getAvatar(md5(data.get('email').toLowerCase(),data))

    }
    getAvatar(emailEncrypted){
        const postData = this.postData ;
        fetch(`https://www.gravatar.com/avatar/${emailEncrypted}`)
            .then((response)=>{
                postData(response.url) ;
            }).catch((err) => {
            postData('') ;
            console.log(err)
        });
    }
    postData(avatarUrl){
        let {form} = this.state ;
        form.append('image',avatarUrl)
        const data = {
            email:form.get('email'),
            comment:form.get("comment"),
            image:form.get("image")
        };
        fetch('http://127.0.0.1:8082/api/comments', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        }).then(() => {
            this.props.getComments();
        }).catch((err) => {
            console.log(err)
        });
    }


    render() {
        return (
            <form className="comments-feed__comments-form" name="comments-form" onSubmit={this.handelSubmit}>
                <input type="email" name="email" placeholder="email"/>
                <textarea name="comment" placeholder="message" />
                <input type="submit" value="submit"/>
            </form>
        );
    }
}

export default CommentForm;
