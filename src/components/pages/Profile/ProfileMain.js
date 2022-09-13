import React, {useEffect, useState} from "react";
import moment from 'moment';
import Post from "../../Post";
import { config } from "../../../Constants";

const ProfileMain = ({user, posts}) => {
    const [likedPosts, setLikedPosts] = useState([]);
    const url = config.url.BASE_URL;

    useEffect(() => {
        usersLikedPosts();
    }, [])

    const usersLikedPosts = () => {
        const token = localStorage.getItem('token');
        const formData = {
            headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}
        };
        fetch(`${url}/users/posts-liked`, formData)
            .then(r => r.json())
            .then(response => {
                setLikedPosts(response.user_data.likes)
            })
            .catch(err => console.log(err));
    }

    return (
        <div className='profile-main'>
            <div className='main-box'>
                <div>
                    <div className='profile-intro-container'>
                        <div className='post-1'>
                            <h1>Intro</h1>
                            <div>
                                {user.biography === "" ? <p>Add a Bio...</p> : <p>{user.biography}</p>}
                            </div>
                            <div>
                                <p>Joined <strong>{moment(user.date_joined).format('MMMM Do YYYY')}</strong></p>
                                <p>Born <strong>{moment(user.date_of_birth).format('MMMM Do YYYY')}</strong></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='profile-posts-container'>
                    <div className='create-bar'>
                        <div className='post-1'>
                            <h1>Posts</h1>
                        </div>
                    </div>
                    <div className='post-container'>
                        {posts.length > 0 && posts.map((data) => {
                            return (
                                <Post data={data} key={data._id} likedPosts={likedPosts}/>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileMain;