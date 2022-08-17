import React, { useState } from 'react';
import { ReactComponent as LikeIcon } from "../styles/icons/facebook-like.svg";

const Post = () => {
    const [likes, setLikes] = useState(0);

    return (
        <div className='post-container'>
            <div className='post-1'>
                <div className='post-header'>
                    <span className='icon-button'>🐶</span>
                    <div>
                        <p>Post Title</p>
                        <p>timestamp Ago · Location</p>
                    </div>
                </div>
                <div className='post-content'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Aliquam aliquid amet aspernatur beatae, cum dignissimos facere minima minus,
                        nesciunt porro ullam voluptate.
                        Cupiditate debitis eum necessitatibus quibusdam rerum sequi tempora.</p>
                </div>
                <div className="post-footer">
                    <div className='post-info'>
                        <div><span className='fb-like'><LikeIcon/></span><p>17</p></div>
                        <p>X comments</p>
                    </div>
                    <div className='post-like-container'>
                        <p>Like</p>
                        <p>Comment</p>
                        <p>Share</p>
                    </div>
                    <div className='post-add-comment-container'>
                        <span className='icon-button-small'>🤑</span>
                        <p>Write a comment...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;