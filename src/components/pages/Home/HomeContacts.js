import React, {useEffect, useState} from 'react';
import Friends from "../Friends";

const HomeContacts = () => {
    const [friends, setFriends] = useState([]);
    const [friendRequests, setFriendRequests] = useState([]);
    const [friendsRequested, setFriendsRequested] = useState([]);

    useEffect(() => {
        getFriends();
        getFriendRequests();
        getFriendsRequested();
    }, []);

    const testSendRequest = () => {
        fetch('http://localhost:5000/api/friends/send', {method: 'POST', headers:{'Content-Type': 'application/json'}})
            .then(r => r.json())
            .then(data => {
                console.log('Friend request sent');
            })
            .catch(err => console.log(err));
        console.log(friends)
        console.log(friendRequests)
        console.log(friendsRequested)
    }

    const testAcceptRequest = () => {
        fetch('http://localhost:5000/api/friends/accept', {method: 'POST', headers:{'Content-Type': 'application/json'}})
            .then(r => r.json())
            .then(data => {
                console.log('Friend request accepted');
            })
            .catch(err => console.log(err));
    }

    const getFriends = () => {
        const token = localStorage.getItem('token');

        fetch('http://localhost:5000/api/friends', {headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}})
            .then(r => r.json())
            .then(data => {
                setFriends([...data.user_data.friends]);
            })
    }

    const getFriendRequests = () => {
        const token = localStorage.getItem('token');

        fetch('http://localhost:5000/api/friends/requests', {headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}})
            .then(r => r.json())
            .then(data => {
                setFriendRequests([...data.user_data.friend_requests]);
            })
    }

    const getFriendsRequested = () => {
        const token = localStorage.getItem('token');

        fetch('http://localhost:5000/api/friends/requested', {headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}})
            .then(r => r.json())
            .then(data => {
                setFriendsRequested([...data.user_data.friends_requested]);
            })
    }

    const Friend = ({name, id}) => {
        return (
            <li className="content-nav-item" onClick={() => testSendRequest()}>
                <a href='/profile'><span className='icon-button' onClick={() => console.log(id)}>😁</span></a>
                <p>{name}</p>
            </li>
        )
    }

    const FriendRequests = ({name, id}) => {
        return (
            <li className="content-nav-item">
                <a href='/profile'><span className='icon-button'>😁</span></a>
                <p>{name}</p>
                <span className='icon-right' onClick={() => console.log(id)}>🟢</span>
                {/*<span className='icon-right'>❌</span>*/}
            </li>
        )
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
                        <p>Example Friend 1</p>
                    </li>

                    {friends.length > 0 && friends.map((data) => {
                        return (
                            <Friend name={`${data.firstname} ${data.surname}`} id={data._id} />
                        )
                    })}
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
                        {/*<span className='icon-right'>❌</span>*/}
                    </li>

                    {friendRequests.length > 0 && friendRequests.map((data) => {
                        return (
                            <FriendRequests name={`${data.firstname} ${data.surname}`} id={data._id} />
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default HomeContacts;
