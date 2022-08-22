import React, {useEffect, useState} from 'react';

const HomeContacts = () => {
    const [friends, setFriends] = useState([]);
    const [friendRequests, setFriendRequests] = useState([]);
    const [friendsRequested, setFriendsRequested] = useState([]);

    useEffect(() => {
        // getFriends();
        // getFriendRequests();
        // getFriendsRequested();
    }, []);

    const testSendRequest = () => {
        console.log("test request");
        const formData = JSON.stringify({
            request_id: '62fea48af4099612b9488881',
        });

        fetch('http://localhost:5000/api/friends/send', {method: 'POST', body: formData, headers:{'Content-Type': 'application/json'}})
            .then(r => r.json())
            .then(data => {
                console.log(data);
            })
            .catch(err => console.log(err));
    }

    const testAcceptRequest = () => {
        console.log("test accept");
        const formData = JSON.stringify({
            request_id: '62fea48af4099612b9488881',
        });

        fetch('http://localhost:5000/api/friends/accept', {method: 'POST', body: formData, headers:{'Content-Type': 'application/json'}})
            .then(r => r.json())
            .then(data => {
                console.log(data);
            })
            .catch(err => console.log(err));
    }

    const getFriends = () => {
        fetch('http://localhost:5000/api/friends')
            .then(r => r.json())
            .then(data => {
                console.log('friends: ', data);
                setFriends([...friends, ...data.friends_list]);
            })
    }

    const getFriendRequests = () => {
        fetch('http://localhost:5000/api/friends/requests')
            .then(r => r.json())
            .then(data => {
                console.log('friend requests: ', data);
                setFriendRequests([...friendRequests, ...data.friend_requests]);
            })
    }

    const getFriendsRequested = () => {
        fetch('http://localhost:5000/api/friends/requested')
            .then(r => r.json())
            .then(data => {
                console.log('friends requested: ', data);
                setFriendsRequested([...friendsRequested, ...data.friends_requested]);
            })
    }

    return (
        <div className='contacts-container'>
            <div className=''>
                <p className="contacts-header">
                    Contacts
                </p>
                <ul className="contacts-list" >
                    <li className="content-nav-item" onClick={() => testSendRequest()}>
                        <a href='/profile'><span className='icon-button'>😁</span></a>
                        <p>Friend 1</p>
                    </li>

                    <li className="content-nav-item" onClick={() => testAcceptRequest()}>
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
