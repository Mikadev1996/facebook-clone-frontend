import React from "react";
import Post from "../../Post";

const ProfileMain = () => {

    return (
        <div className='profile-main'>
            <div className='main-box'>
                <div>
                    <div className='profile-intro-container'>
                        <div className='post-1'>
                            <h1>Intro</h1>
                            <div>
                                <p>Add your bio here...</p>
                            </div>
                            <div>
                                <p>From <strong>Berlin, Germany</strong></p>
                                <p>Born <strong>23/11/2000</strong></p>
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
                        <Post />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileMain;