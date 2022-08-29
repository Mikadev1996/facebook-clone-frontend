import React, {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';
import Footer from "../../Footer";
import Nav from "../../Nav";
import HomeContent from "./HomeContent";;

const Home = () => {
    const nav = useNavigate();
    const [friends, setFriends] = useState([]);
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState({});

    async function getPosts() {
        let user_id = localStorage.getItem('user_id').replaceAll('"', '');
        const token = localStorage.getItem('token');
        const formData = {headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}};

        const allPosts = await fetch('http://localhost:5000/api/post')
        const allFriends = await fetch('http://localhost:5000/api/friends', formData)

        let allPostsData = await allPosts.json();
        let allFriendsData = await allFriends.json();

        allFriendsData = allFriendsData.user_data.friends;
        allFriendsData = allFriendsData.map(data => data._id);
        allFriendsData.push(user_id); // So current user posts still render
        allPostsData = allPostsData.posts;

        allPostsData = allPostsData.filter(item => allFriendsData.includes(item.user._id));

        setPosts([...allPostsData])
    }

    useEffect(() => {
        getPosts();
        checkAuth();
    }, []);

    function checkAuth() {
        const token = localStorage.getItem('token');
        fetch('http://localhost:5000/api/user', {headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}})
            .then(r => r.json())
            .then(data => {
                if (data.error) {
                    localStorage.removeItem('token');
                    nav('/');
                    return;
                }
                setUser(data.user);
            })
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