import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Nav from "../../Nav";
import Footer from "../../Footer";
import ProfileContent from "./ProfileContent";
import ProfileFriends from "./ProfileFriends";

const Profile = () => {
    const { id } = useParams();
    const [openMenu, setOpenMenu] = useState('main');
    const [user, setUser] = useState(null);
    const nav = useNavigate();

    useEffect(() => {
        checkAuth();
        getUser();
    }, []);

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

    const getUser = () => {
        const token = localStorage.getItem('token');
        const formData = {
            headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}
        };

        fetch(`http://localhost:5000/api/user/${id}`, formData)
            .then(r => r.json())
            .then(data => setUser(data.user_data))
            .catch(err => console.log(err));
    }

    return (
        <div className='app'>
            <Nav />
            {user && openMenu === 'main' && <ProfileContent setOpenMenu={setOpenMenu} openMenu={openMenu} user={user}/>}
            {user && openMenu === 'friends' && <ProfileFriends setOpenMenu={setOpenMenu} openMenu={openMenu} user={user}/>}
            <Footer/>
        </div>
    )
}

export default Profile