import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Nav from "../../Nav";
import Footer from "../../Footer";
import ProfileContent from "./ProfileContent";
import ProfileFriends from "./ProfileFriends";
import { config } from '../../../Constants';

import '../../../styles/ProfileHeader.scss';
import '../../../styles/ProfileMain.scss';

const Profile = () => {
    const { id } = useParams();
    const [openMenu, setOpenMenu] = useState('main');
    const [user, setUser] = useState(null);
    const [profile, setProfile] = useState(null);
    const [posts, setPosts] = useState([]);
    const nav = useNavigate();
    const url = config.url.BASE_URL;

    useEffect(() => {
        checkAuth();
        getProfileUser();
        getUserPosts();
    }, []);

    function checkAuth() {
        const token = JSON.parse(localStorage.getItem('token'));
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

    const getProfileUser = () => {
        const token = JSON.parse(localStorage.getItem('token'));
        const formData = {
            headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}
        };

        fetch(`${url}/users/${id}`, formData)
            .then(r => r.json())
            .then(data => {setProfile(data.user_data)})
            .catch(err => console.log(err));
    }

    const getUserPosts = () => {
        const token = JSON.parse(localStorage.getItem('token'));
        const formData = {
            headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}
        };

        fetch(`${url}/posts/user/${id}`, formData)
            .then(r => r.json())
            .then(data => setPosts([...data.posts]))
            .catch(err => console.log(err));
    }

    return (
        <div className='app'>
            <Nav user={user} />
            {user && profile && openMenu === 'main' && <ProfileContent posts={posts} setOpenMenu={setOpenMenu} openMenu={openMenu} user={user} profile={profile}/>}
            {user && profile && openMenu === 'friends' && <ProfileFriends setOpenMenu={setOpenMenu} openMenu={openMenu} user={user} profile={profile}/>}
            <Footer/>
        </div>
    )
}

export default Profile