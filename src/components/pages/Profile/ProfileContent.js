import React from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileMain from "./ProfileMain";

const ProfileContent = ({setOpenMenu, openMenu}) => {
    return (
        <main className='profile-content'>
            <ProfileHeader setOpenMenu={setOpenMenu} openMenu={openMenu}/>
            <ProfileMain />
        </main>
    )
}

export default ProfileContent;