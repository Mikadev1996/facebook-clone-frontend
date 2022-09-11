import React from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileMain from "./ProfileMain";

const ProfileContent = ({setOpenMenu, openMenu , user, posts}) => {
    return (
        <main className='profile-content'>
            <ProfileHeader setOpenMenu={setOpenMenu} openMenu={openMenu} user={user}/>
            <ProfileMain user={user} posts={posts}/>
        </main>
    )
}

export default ProfileContent;