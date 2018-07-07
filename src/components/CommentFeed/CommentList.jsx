import React from 'react';
import './CommentList.scss';
import Comment from './Comment'
class CommentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {filteredComments: null};
        this.filterComments = this.filterComments.bind(this);
    }
    filterComments(email){
        if(email!==''){
            this.setState({filteredComments:null})
        }
        let filteredComments = this.props.comments.filter((comment)=>comment.email.includes(email))
        this.setState({filteredComments:filteredComments})
    }
    render() {
        const {comments} = this.props;
        const {filteredComments} =this.state;
        return (
            <div className="comments-feed__comments-comment-list">
                <div className="comments-feed__comments-comment-list__filter">
                    <input type="text" name="commentsFilter" placeholder="search"
                           onChange={(e)=>this.filterComments(e.target.value)}/>
                </div>
            <ul>
                    {filteredComments  ?
                        filteredComments.map(comment=><Comment comment={comment}/>)
                        :
                        comments.map(comment=><Comment comment={comment}/>)
                    }
                </ul>
            </div>
        );
    }
}

export default CommentList;
