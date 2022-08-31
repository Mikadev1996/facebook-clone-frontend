import React, {useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom';
import Nav from "../Nav";
import Footer from "../Footer";

const Friends = () => {
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [user, setUser] = useState({});

    const nav = useNavigate();

    useEffect(() => {
        checkAuth();
        getFilteredUsers();
    }, []);

    async function getFilteredUsers() {
        const token = localStorage.getItem('token');
        const formData = {headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}};

        fetch('http://localhost:5000/api/friends/filtered', formData)
            .then(r => r.json())
            .then(data => {
                setFilteredUsers(data.friends_data)
            })
            .catch(err => console.log(err));
    }

    function checkAuth() {
        const token = localStorage.getItem('token');
        const formData = {headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}}

        fetch('http://localhost:5000/api/user', formData)
            .then(r => r.json())
            .then(data => {
                if (data.error) {
                    localStorage.removeItem('token');
                    nav('/');
                }
                setUser(data.user);
            })
    }

    function sendFriendRequest(requested_id) {
        const token = localStorage.getItem('token');
        const formData = {
            method: 'POST',
            body: JSON.stringify({requested_id: requested_id}),
            headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}
        };

        fetch('http://localhost:5000/api/friends/send', formData)
            .then(r => r.json())
            .then(data => {
                if (data.error) return console.log(data );
                console.log("request sent");
                getFilteredUsers().then(data => setFilteredUsers(data));
            })
            .catch(err => console.log('Error: ', err));

    }

    const User = ({name, id}) => {
        return (
            <li className="content-nav-item">
                <a href='/profile'><span className='icon-button'>😊</span></a>
                <p>{name}</p>
                <span className='icon-right' onClick={() => sendFriendRequest(id)}>➕</span>
            </li>
        )
    }

    return (
        <div className='app'>
            <Nav user={user}/>
            <main className='friends-content'>
                <div className='post-1'>
                    <h2 className="contacts-header">
                        Send a friend request!
                    </h2>
                    <ul className="contacts-list">

                        {filteredUsers.length > 0 && filteredUsers.map((data) => {
                            return (
                                <User name={`${data.firstname} ${data.surname}`} id={data._id} key={data._id}/>
                            )
                        })}

                    </ul>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default Friends;