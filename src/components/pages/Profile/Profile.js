import React, { useState } from 'react';
import Nav from "../../Nav";
import Footer from "../../Footer";
import ProfileContent from "./ProfileContent";
import ProfileFriends from "./ProfileFriends";

const Profile = () => {
    const [openMenu, setOpenMenu] = useState('main');

    return (
        <div className='app'>
            <Nav />
            {openMenu === 'main' && <ProfileContent setOpenMenu={setOpenMenu} openMenu={openMenu}/>}
            {openMenu === 'friends' && <ProfileFriends setOpenMenu={setOpenMenu} openMenu={openMenu}/>}
            <Footer/>
        </div>
    )
}

export default Profile