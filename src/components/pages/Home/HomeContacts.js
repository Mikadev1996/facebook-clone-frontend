import React, {useEffect, useState} from 'react';

const HomeContacts = ({getPosts}) => {
    const [friends, setFriends] = useState([]);
    const [friendRequests, setFriendRequests] = useState([]);

    useEffect(() => {
        getFriends();
        getFriendRequests();
    }, []);

    const acceptRequest = (id) => {
        const token = localStorage.getItem('token');
        const formData = {
            method: 'POST',
            body: JSON.stringify({
                sender_id: id
            }),
            headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}
        };

        fetch('http://localhost:5000/api/friends/accept', formData)
            .then(r => r.json())
            .then(data => {
                if (data.error) return console.log(data);
                console.log('request accepted');
                getFriends();
                getFriendRequests();
                getPosts();
            })
    }

    const denyRequest = (id) => {
        const token = localStorage.getItem('token');
        const formData = {
            method: 'POST',
            body: JSON.stringify({
                sender_id: id
            }),
            headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}
        };

        fetch('http://localhost:5000/api/friends/deny', formData)
            .then(r => r.json())
            .then(data => {
                if (data.error) return console.log(data);
                console.log('request denied');
                getFriends();
                getFriendRequests();
            })
    }

    const getFriends = () => {
        const token = localStorage.getItem('token');
        const formData = {headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}};

        fetch('http://localhost:5000/api/friends', formData)
            .then(r => r.json())
            .then(data => {
                setFriends([...data.user_data.friends]);
            })
    }

    const getFriendRequests = () => {
        const token = localStorage.getItem('token');
        const formData = {headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}};

        fetch('http://localhost:5000/api/friends/requests', formData)
            .then(r => r.json())
            .then(data => {
                setFriendRequests([...data.user_data.friend_requests]);
            })
    }

    const Friend = ({name, id}) => {
        return (
            <li className="content-nav-item">
                <a href='/profile'><span className='icon-button'>😁</span></a>
                <p>{name}</p>
            </li>
        )
    }

    const FriendRequests = ({name, id}) => {
        return (
            <li className="content-nav-item">
                <a href='/profile'><span className='icon-button'>😁</span></a>
                <p>{name}</p>
                <span className='icon-right' onClick={() => acceptRequest(id)}>🟢</span>
                <span className='icon-right' onClick={() => denyRequest(id)}>❌</span>
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
