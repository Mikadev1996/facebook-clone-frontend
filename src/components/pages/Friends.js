import React, {useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom';
import Nav from "../Nav";
import Footer from "../Footer";

const Friends = () => {
    const [filteredUsers, setFilteredUsers] = useState([]);

    const nav = useNavigate();

    useEffect(() => {
        checkAuth();
        getFilteredUsers()
            .then(data => console.log(data))
    }, []);

    async function getFilteredUsers() {
        const token = localStorage.getItem('token');
        const formData = {
            headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}
        }

        const allUsers = await fetch('http://localhost:5000/api/user/all', formData);
        let allUsersData = await allUsers.json();
        const requestedUsers = await fetch('http://localhost:5000/api/friends/requested', formData);
        let requestedUsersData = await requestedUsers.json();

        allUsersData = allUsersData.users;
        requestedUsersData = requestedUsersData.user_data;
        if (!requestedUsersData) return allUsersData;


        const filteredUsers = allUsersData.filter(item => !requestedUsersData.includes(item._id));
        return filteredUsers
    }

    function checkAuth() {
        const token = localStorage.getItem('token');
        fetch('http://localhost:5000/api/user', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(r => r.json())
            .then(data => {
                if (data.error) {
                    localStorage.removeItem('token');
                    nav('/');
                }
            })
    }

    function sendFriendRequest(requested_id) {
        const token = localStorage.getItem('token');
        const formData = {
            method: 'POST',
            body: JSON.stringify({requested_id: requested_id}),
            headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}
        }

        fetch('http://localhost:5000/api/friends/send', formData)
            .then(r => r.json())
            .then(data => {
                if (data.error) {
                    console.log(data);
                } else {
                    console.log("request send")
                    // getUsers();
                }
            })

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
            <Nav/>
            <main className='friends-content'>
                <div className='post-1'>
                    <h2 className="contacts-header">
                        Send a friend request!
                    </h2>
                    <ul className="contacts-list">
                        <li className="content-nav-item">
                            <a href='/profile'><span className='icon-button'>😁</span></a>
                            <p>Friend 1</p>
                            <span className='icon-right'>➕</span>
                        </li>

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