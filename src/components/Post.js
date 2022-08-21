import React, { useState } from 'react';
import moment from 'moment';
import { ReactComponent as LikeIcon } from "../styles/icons/facebook-like.svg";

const Post = ({data}) => {
    const [likes, setLikes] = useState(0);
    const dateFormatted = moment(data.timestamp).fromNow(true)

    return (
        <div className='post-container'>
            <div className='post-1'>
                <div className='post-header'>
                    <span className='icon-button'>🐶</span>
                    <div>
                        <p>{data.user.username}</p>
                        <p>{dateFormatted} Ago · Location</p>
                    </div>
                </div>
                <div className='post-content'>
                    <p>{data.text}</p>
                </div>
                <div className="post-footer">
                    <div className='post-info'>
                        <div><span className='fb-like'><LikeIcon/></span><p>{data.likes}</p></div>
                        <p>0 comments</p>
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