import React from "react";

const ProfileHeader = () => {
    return (
        <div className='profile-header-container'>

            <div className='profile-header-content'>
                <span className='icon-button-profile'>🤠</span>
                <div>
                    <h1>Charmika Devendra</h1>
                    <p>212 friends</p>
                </div>
            </div>

            <div className='header-nav'>
                <div>
                    <p>Posts</p>
                    <p>Friends</p>
                </div>
                <div>
                    <button>Edit Profile</button>
                </div>
            </div>
        </div>
    )
}

export default ProfileHeader;