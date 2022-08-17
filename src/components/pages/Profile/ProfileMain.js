import React from "react";
import Post from "../../Post";

const ProfileMain = () => {
    return (
        <div className='profile-main'>
            <div className='profile-intro-container'>
                <div>
                    <h1>Intro</h1>
                </div>
                <div>
                    <div>
                        <p>Add your bio here...</p>
                    </div>
                    <div>
                        <p>From <strong>Berlin, Germany</strong></p>
                        <p>Born <strong>23/11/2000</strong></p>
                    </div>
                </div>
            </div>
            <div className='profile-posts-container'>
                <div className='posts-bar'>
                    <div>
                        <h1>Posts</h1>
                    </div>
                </div>
                <div className='post-container'>
                    <Post />
                </div>
            </div>
        </div>
    )
}

export default ProfileMain;