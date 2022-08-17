import React, {useState} from "react";
import ProfileHeader from "./ProfileHeader";

const ProfileFriends = ({setOpenMenu, openMenu}) => {
    return (
        <main className='profile-content'>
            <ProfileHeader setOpenMenu={setOpenMenu} openMenu={openMenu}/>
            <div className="profile-main">
                <ul className="contacts-list">
                    <li className="content-nav-item">
                        <a href='/profile'><span className='icon-button'>😁</span></a>
                        <p>Friend 1</p>
                    </li>

                    <li className="content-nav-item">
                        <a href='/profile'><span className='icon-button'>😊</span></a>
                        <p>Friend 2</p>
                    </li>

                    <li className="content-nav-item">
                        <a href='/profile'><span className='icon-button'>🤑</span></a>
                        <p>Friend 3</p>
                    </li>
                </ul>
            </div>
        </main>
    )
}

export default ProfileFriends;