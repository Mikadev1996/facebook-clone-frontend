import React, {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';
import Nav from "../Nav";
import Footer from "../Footer";

const Friends = () => {
    const [users, setUsers] = useState([]);
    const nav = useNavigate();

    useEffect(() => {
        checkAuth();
        getUsers();
    }, []);

    function getUsers() {
        const token = localStorage.getItem('token');
        fetch('http://localhost:5000/api/user/all', {headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}})
            .then(r => r.json())
            .then(data => {
                setUsers([...data.users]);
            })
    }

    function checkAuth() {
        const token = localStorage.getItem('token');
        fetch('http://localhost:5000/api/user', {headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}})
            .then(r => r.json())
            .then(data => {
                if (data.error) {
                    localStorage.removeItem('token');
                    nav('/');
                }
            })
    }

    function sendFriendRequest(requested_id) {
        const formData = JSON.stringify({
            requested_id: requested_id
        })

        const token = localStorage.getItem('token');
        fetch('http://localhost:5000/api/friends/send', {method: 'POST', body: formData, headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}})
            .then(r => r.json())
            .then(data => {
                if (data.error) {
                    console.log(data);
                }
                else {
                    console.log("request send")
                    getUsers();
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
            <Nav />
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

                        {users.length > 0 && users.map((data) => {
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