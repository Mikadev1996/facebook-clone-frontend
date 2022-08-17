import React, {useEffect} from "react";

const ProfileHeader = ({setOpenMenu, openMenu}) => {

    useEffect(() => {
        console.log(openMenu);
    })

    const handleFriendsMenu = () => {
        setOpenMenu('friends')
    }

    const handlePostsMenu = () => {
        setOpenMenu('main')
    }

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
                <div className='profile-nav-selection'>
                    {openMenu === 'main' ? <p id='post-select' className='home-logo' onClick={handlePostsMenu}>Posts</p> : <p id='post-select' onClick={handlePostsMenu}>Posts</p>}
                    {openMenu === 'friends' ? <p id='friends-select' className='home-logo' onClick={handleFriendsMenu}>Friends</p> : <p id='friends-select' onClick={handleFriendsMenu}>Friends</p> }
                </div>
                <div>
                    <button>Edit Profile</button>
                </div>
            </div>
        </div>
    )
}

export default ProfileHeader;