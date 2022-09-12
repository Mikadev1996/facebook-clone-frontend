import React, {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';
import Footer from "../../Footer";
import Nav from "../../Nav";
import HomeContent from "./HomeContent";

const Home = () => {
    const nav = useNavigate();
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState({});

    async function getPosts() {
        let user_id = JSON.parse(localStorage.getItem('user_id'));
        const token = JSON.parse(localStorage.getItem('token'));

        const formData = {headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}};

        fetch('http://localhost:5000/api/posts/friends', formData)
            .then(r => r.json())
            .then(data => setPosts([...data.posts]))
            .catch(err => console.log(err));
    }

    useEffect(() => {
        getPosts();
        checkAuth();
    }, []);

    function checkAuth() {
        const token = JSON.parse(localStorage.getItem('token'));
        const formData = {headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}}

        fetch('http://localhost:5000/api/users', formData)
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
        <div className='app'>
            <Nav user={user}/>
            <HomeContent posts={posts} user={user} getPosts={getPosts}/>
            <Footer />
        </div>
    )
}

export default Home;