import React from 'react';
import FriendsIcon from '../../../styles/icons/friends_icon.png';

const HomeLeftNav = () => {
    return (
        <div className='content-nav'>
            <a href='/profile/123' className="content-nav-item">
                <span className='icon-button'>😎</span>
                <p>Charmika Devendra</p>
            </a>
            <a href='/friends' className="content-nav-item">
                <span className='icon-button'><img src={FriendsIcon} alt="friends"/></span>
                <p>Friends</p>
            </a>
        </div>
    )
}

export default HomeLeftNav;