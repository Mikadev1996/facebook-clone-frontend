import React from 'react';
import FriendsIcon from '../../../styles/icons/friends_icon.png';

const HomeLeftNav = () => {
    return (
        <div className='content-nav'>
            <div className="content-nav-item">
                <a href='/profile'><span className='icon-button'>😎</span></a>
                <p>Charmika Devendra</p>
            </div>
            <div className="content-nav-item">
                <a href='/friends' className='icon-button'><img src={FriendsIcon} alt="friends"/></a>
                <p>Friends</p>
            </div>
        </div>
    )
}

export default HomeLeftNav;