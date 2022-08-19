import React from 'react';

const HomeContacts = () => {

    const testRequest = () => {
        const formData = JSON.stringify({
            request_id: '62fea48af4099612b9488881',
        });

        fetch('https://sheltered-woodland-69437.herokuapp.com/api/friends/send', {method: 'POST', body: formData, headers:{'Content-Type': 'application/json'}})
            .then(r => r.json())
            .then(data => {
                console.log(data);
            });
    }

    return (
        <div className='contacts-container'>
            <div className=''>
                <p className="contacts-header">
                    Contacts
                </p>
                <ul className="contacts-list" onClick={() => testRequest()}>
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
            <div className=''>
                <p className="contacts-header">
                    Friend Requests
                </p>
                <ul className="contacts-list">
                    <li className="content-nav-item">
                        <a href='/profile'><span className='icon-button'>😁</span></a>
                        <p>Friend 1</p>
                        <span className='icon-right'>🟢</span>
                        <span className='icon-right'>❌</span>
                    </li>

                    <li className="content-nav-item">
                        <a href='/profile'><span className='icon-button'>😊</span></a>
                        <p>Friend 2</p>
                        <span className='icon-right'>🟢</span>
                        <span className='icon-right'>❌</span>
                    </li>

                    <li className="content-nav-item">
                        <a href='/profile'><span className='icon-button'>🤑</span></a>
                        <p>Friend 3</p>
                        <span className='icon-right'>🟢</span>
                        <span className='icon-right'>❌</span>

                    </li>
                    <li className="content-nav-item">
                        <a href='/profile'><span className='icon-button'>🤑</span></a>
                        <p>Friend 3</p>
                        <span className='icon-right'>🟢</span>
                        <span className='icon-right'>❌</span>

                    </li>
                    <li className="content-nav-item">
                        <a href='/profile'><span className='icon-button'>🤑</span></a>
                        <p>Friend 3</p>
                        <span className='icon-right'>🟢</span>
                        <span className='icon-right'>❌</span>

                    </li>
                    <li className="content-nav-item">
                        <a href='/profile'><span className='icon-button'>🤑</span></a>
                        <p>Friend 3</p>
                        <span className='icon-right'>🟢</span>
                        <span className='icon-right'>❌</span>

                    </li>
                    <li className="content-nav-item">
                        <a href='/profile'><span className='icon-button'>🤑</span></a>
                        <p>Friend 3</p>
                        <span className='icon-right'>🟢</span>
                        <span className='icon-right'>❌</span>

                    </li>
                    <li className="content-nav-item">
                        <a href='/profile'><span className='icon-button'>🤑</span></a>
                        <p>Friend 3</p>
                        <span className='icon-right'>🟢</span>
                        <span className='icon-right'>❌</span>

                    </li>
                    <li className="content-nav-item">
                        <a href='/profile'><span className='icon-button'>🤑</span></a>
                        <p>Friend 3</p>
                        <span className='icon-right'>🟢</span>
                        <span className='icon-right'>❌</span>

                    </li>
                    <li className="content-nav-item">
                        <a href='/profile'><span className='icon-button'>🤑</span></a>
                        <p>Friend 3</p>
                        <span className='icon-right'>🟢</span>
                        <span className='icon-right'>❌</span>

                    </li>
                    <li className="content-nav-item">
                        <a href='/profile'><span className='icon-button'>🤑</span></a>
                        <p>Friend 3</p>
                        <span className='icon-right'>🟢</span>
                        <span className='icon-right'>❌</span>

                    </li>
                    <li className="content-nav-item">
                        <a href='/profile'><span className='icon-button'>🤑</span></a>
                        <p>Friend 3</p>
                        <span className='icon-right'>🟢</span>
                        <span className='icon-right'>❌</span>

                    </li>
                    <li className="content-nav-item">
                        <a href='/profile'><span className='icon-button'>🤑</span></a>
                        <p>Friend 3</p>
                        <span className='icon-right'>🟢</span>
                        <span className='icon-right'>❌</span>

                    </li>
                    <li className="content-nav-item">
                        <a href='/profile'><span className='icon-button'>🤑</span></a>
                        <p>Friend 3</p>
                        <span className='icon-right'>🟢</span>
                        <span className='icon-right'>❌</span>

                    </li>
                </ul>
            </div>
        </div>
    )
}

export default HomeContacts;
