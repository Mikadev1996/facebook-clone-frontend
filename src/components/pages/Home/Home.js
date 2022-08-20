import React, {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';
import Footer from "../../Footer";
import Nav from "../../Nav";
import HomeContent from "./HomeContent";;

const Home = () => {
    const nav = useNavigate();
    const token = localStorage.getItem('token');
    const [posts, setPosts] = useState([]);

    const getPosts = () => {
        fetch('http://localhost:5000/api/post')
            .then(r => r.json())
            .then(data => {
                setPosts(posts => [...posts, ...data.posts]);
            })
    }

    useEffect(() => {
        getPosts();
        checkAuth();
    }, []);

    function checkAuth() {
        fetch('http://localhost:5000/api/user', {headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}})
            .then(r => r.json())
            .then(data => {
                if (data.error) {
                    localStorage.removeItem('token');
                    nav('/');
                }
            })
    }

    return (
        <div className='app'>
            <Nav />
            <HomeContent posts={posts} />
            <Footer />
        </div>
    )
}

export default Home;