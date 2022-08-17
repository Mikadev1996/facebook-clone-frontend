import React from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileMain from "./ProfileMain";

const ProfileContent = () => {
    return (
        <main className='profile-content'>
            <ProfileHeader />
            <ProfileMain />
        </main>
    )
}

export default ProfileContent;