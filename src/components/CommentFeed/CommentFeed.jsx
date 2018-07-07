import React from 'react';
import './CommentFeed.scss';
import CommentForm from './CommentForm.jsx'
import CommentList from './CommentList.jsx'

class CommentFeed extends React.Component {
    constructor(props) {
        super(props);
        this.state = { comments: null };
        this.getComments = this.getComments.bind(this);
    }

    componentDidMount() {
        this.getComments()
    }

    getComments() {
        fetch(`http://127.0.0.1:8082/api/comments`)
            .then((response) => {
                return response.json();
            }).then((commentsJson) => {
                this.setState({comments:commentsJson})
            })
            .catch((err) => {
                console.log(err)
            });
    }

    render() {
        const {comments} = this.state;
        return (
            <div className="comments-feed">
                <CommentForm  getComments={this.getComments}/>
                {comments && <CommentList getComments={this.getComments} comments={comments}/>}
            </div>
        );
    }
}

export default CommentFeed;
