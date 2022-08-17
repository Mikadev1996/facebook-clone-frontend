import React, { useState } from 'react';
import Nav from "../../Nav";
import Footer from "../../Footer";
import ProfileContent from "./ProfileContent";

const Profile = () => {
    return (
        <div className='app'>
            <Nav />
            <ProfileContent />
            <Footer/>
        </div>
    )
}

export default Profile