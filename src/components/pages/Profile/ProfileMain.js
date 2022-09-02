import React from "react";
import moment from 'moment';

const ProfileMain = ({user}) => {

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
                        {/*<Post />*/}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileMain;