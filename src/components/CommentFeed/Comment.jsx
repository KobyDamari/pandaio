import React from 'react';
import './Comment.scss';

const Comment = (props) => {
    const { email, comment, image } = props.comment;
    return (
        <li className="comments-feed__comments-comment-list__comment-item">
            <div>
                <img src={image!== '' ? image:'https://www.librato.com/docs/kb/_images/bigpanda_logo_updated.png'} />
            </div>
            <div>
                <strong>{email}</strong>
                <p>{comment}</p>
            </div>
        </li>
    );
}
export default Comment;
