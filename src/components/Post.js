import React, { useState } from 'react';

const Post = () => {
    const [likes, setLikes] = useState(0);

    return (
        <div className='post-container'>
            <div className='post-header'>
                <span className='icon-button'>🐶</span>
                <div>
                    <p>Post Title</p>
                    <p>timestamp Ago · Location</p>
                </div>
            </div>
            <div className='post-content'>

            </div>
            <div className="post-footer">
                <div className='post-like-container'>
                    <p>Like</p>
                </div>
                <div className='post-info'><p>Likes logo 17</p><p>X comments</p></div>
                <div className="post-comment-container">
                    <p>Comment</p>
                </div>
                <div className='post-add-comment-container'>
                    <span className='icon-button-small'>🤑</span>
                    <p>Write a comment...</p>
                </div>
            </div>
        </div>
    )
}

export default Post;