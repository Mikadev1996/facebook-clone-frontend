import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Footer from "../../Footer";
import Nav from "../../Nav";
import HomeContent from "./HomeContent";
import HomeCreatePost from "./HomeCreatePost";

const Home = () => {
    const nav = useNavigate();
    const token = localStorage.getItem('token');

    useEffect(() => {
        fetch('http://localhost:5000/api/user', {headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}})
            .then(r => r.json())
            .then(data => {
                console.log(data);
                if (data.error) {
                    localStorage.removeItem('token');
                    nav('/');
                }
            })
    }, []);


    return (
        <div className='app'>
            <Nav />
            <HomeContent />
            <Footer />
        </div>
    )
}

export default Home;