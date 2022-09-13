import React, {useState} from "react";
import ProfileEdit from "./ProfileEdit";
import {useParams} from "react-router-dom";

const ProfileHeader = ({setOpenMenu, openMenu, user, profile, setBio, setDob}) => {
    const [openProfileEdit, setOpenProfileEdit] = useState(false);
    const { id } = useParams();

    const handleFriendsMenu = () => {
        setOpenMenu('friends')
    }

    const handlePostsMenu = () => {
        setOpenMenu('main')
    }

    return (
        <div className='profile-header-container'>
            {openProfileEdit && <ProfileEdit setOpenProfileEdit={setOpenProfileEdit} setDob={setDob} setBio={setBio}/>}
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
                </div>
            </div>
        </div>
    )
}

export default ProfileHeader;