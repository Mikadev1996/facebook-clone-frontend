import React from 'react';

const HomeContacts = () => {
    return (
        <div className='contacts-container'>
            <p className="contacts-header">
                Contacts
            </p>
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
    )
}

export default HomeContacts;
