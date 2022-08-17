import React, {useState} from "react";
import ProfileHeader from "./ProfileHeader";

const ProfileFriends = ({setOpenMenu, openMenu}) => {
    return (
        <main className='profile-main'>
            <ProfileHeader setOpenMenu={setOpenMenu} openMenu={openMenu}/>

        </main>
    )
}

export default ProfileFriends;