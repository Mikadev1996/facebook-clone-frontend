import React, {useEffect, useState} from "react";
import ProfileEdit from "./ProfileEdit";
import {useNavigate, useParams} from "react-router-dom";
import { config } from "../../../Constants";

const ProfileHeader = ({setOpenMenu, openMenu, user, profile, setBio, setDob}) => {
    const [openProfileEdit, setOpenProfileEdit] = useState(false);
    const { id } = useParams();
    const url = config.url.BASE_URL;
    const userFriends = user.friends.map(item => item._id);
    const nav = useNavigate();

    const handleFriendsMenu = () => {
        setOpenMenu('friends')
    }

    const handlePostsMenu = () => {
        setOpenMenu('main')
    }

    const deleteFriend = () => {
        const token = JSON.parse(localStorage.getItem('token'));
        const formData = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
        }

        fetch(`${url}/friends/delete/${id}`, formData)
            .then(r => r.json())
            .then(data => {
                if (data.error) return console.log(data);
                nav('/home');
            })
            .catch(err => console.log(err));
    }

    return (
        <div className='profile-header-container'>
            {openProfileEdit && <ProfileEdit setOpenProfileEdit={setOpenProfileEdit} setDob={setDob} setBio={setBio} profile={profile}/>}
            <div className='profile-header-content'>
                <span className='icon-button-profile'>🤠</span>
                <div>
                    <h1>{profile.firstname + " " + profile.surname}</h1>
                    {profile.friends && <p>{profile.friends.length} friends</p>}
                </div>
            </div>

            <div className='header-nav'>
                <div className='profile-nav-selection'>
                    {openMenu === 'main' ? <p id='post-select' className='home-logo' onClick={handlePostsMenu}>Posts</p> : <p id='post-select' onClick={handlePostsMenu}>Posts</p>}
                    {openMenu === 'friends' ? <p id='friends-select' className='home-logo' onClick={handleFriendsMenu}>Friends</p> : <p id='friends-select' onClick={handleFriendsMenu}>Friends</p> }
                </div>
                <div>
                    {user._id === id && <button onClick={() => setOpenProfileEdit(prevState => !prevState)}>Edit Profile</button>}
                    {userFriends.includes(profile._id.toString()) && <button className='delete-friend' onClick={() => deleteFriend()}>Delete Friend</button>}
                </div>
            </div>
        </div>
    )
}

export default ProfileHeader;