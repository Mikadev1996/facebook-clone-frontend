import React, {useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom';
import Nav from "../Nav";
import Footer from "../Footer";
import {config} from "../../Constants";
import useLocalStorage from "use-local-storage";

const Friends = () => {
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [user, setUser] = useState({});
    const nav = useNavigate();
    const url = config.url.BASE_URL;

    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme)
    }

    useEffect(() => {
        checkAuth();
        getFilteredUsers();
    }, []);

    function getFilteredUsers() {
        const token = localStorage.getItem('token');
        const formData = {headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}}

        fetch(`${url}/friends/filtered`, formData)
            .then(r => r.json())
            .then(data => {
                if (data.error) {
                    localStorage.removeItem('token');
                    nav('/');
                    return;
                }
                setFilteredUsers(data.friends)
            })
    }

    function checkAuth() {
        const token = localStorage.getItem('token');
        const formData = {headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}}

        fetch(`${url}/users`, formData)
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

        fetch(`${url}/friends/send`, formData)
            .then(r => r.json())
            .then(data => {
                if (data.error) return console.log(data);
                getFilteredUsers();
            })
            .catch(err => console.log('Error: ', err));

    }

    const User = ({name, id}) => {
        return (
            <li className="content-nav-item">
                <a href={`/profile/${id}`}><span className='icon-button'>😊</span></a>
                <p>{name}</p>
                <span className='icon-right' onClick={() => sendFriendRequest(id)}>➕</span>
            </li>
        )
    }

    return (
        <div className='app' data-theme={theme}>
            <Nav user={user} toggleTheme={toggleTheme}/>
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