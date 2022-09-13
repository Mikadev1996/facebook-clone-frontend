import React, {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';
import useLocalStorage from 'use-local-storage'
import Footer from "../../Footer";
import Nav from "../../Nav";
import HomeContent from "./HomeContent";
import { config } from "../../../Constants";

import '../../../styles/Home/Home.scss';
import '../../../styles/Home/HomeContent.scss';
import '../../../styles/Home/HomeContacts.scss';
import '../../../styles/Home/HomeLeftNav.scss';
import '../../../styles/Home/HomeCreatePost.scss';

const Home = () => {
    const nav = useNavigate();
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState({});
    const url = config.url.BASE_URL;

    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme)
    }

    function getPosts() {
        const token = JSON.parse(localStorage.getItem('token'));
        const formData = {headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}};

        fetch(`${url}/posts/friends`, formData)
            .then(r => r.json())
            .then(data => {setPosts([...data.posts])})
            .catch(err => console.log(err));
    }

    useEffect(() => {
        getPosts();
        checkAuth();
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
                    return;
                }
                setUser(data.user);
            })
            .catch(err => console.log(err));
    }

    return (
        <div className='app' data-theme={theme}>
            <Nav user={user} toggleTheme={toggleTheme}/>
            <HomeContent posts={posts} user={user} getPosts={getPosts}/>
            <Footer />
        </div>
    )
}

export default Home;