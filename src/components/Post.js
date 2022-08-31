import React, {useEffect, useState} from 'react';
import moment from 'moment';
import { ReactComponent as LikeIcon } from "../styles/icons/facebook-like.svg";

const Post = ({data}) => {
    const [likes, setLikes] = useState(data.likes);
    const [isLiked, setIsLiked] = useState(false);
    const dateFormatted = moment(data.timestamp).fromNow(true)

    useEffect(() => {
        // isPostLiked();

    }, [])

    const isPostLiked = () => {
        fetch('http://localhost:5000/user/posts-liked')
            .then(r => r.json())
            .then(response => {
                if (response.includes(data._id)) setIsLiked(true);
            })
    }

    const handleLike = () => {
        const token = localStorage.getItem('token');
        const formData = {
            method: 'PUT',
            body: JSON.stringify({
                post_id: data._id
            }),
            headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}
        };

        if (isLiked) {
            fetch('http://localhost:5000/api/post')
        }
        else {

        }
    }

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
                        <div><span className='fb-like'><LikeIcon/></span><p>{likes}</p></div>
                        <p>0 comments</p>
                    </div>
                    <div className='post-like-container'>
                        <p onClick={() => handleLike()}>Like</p>
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