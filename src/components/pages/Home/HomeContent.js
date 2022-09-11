import React, {useEffect, useState} from "react";
import HomeLeftNav from "./HomeLeftNav";
import HomeContacts from "./HomeContacts";
import Post from "../../Post";
import HomeCreatePost from "./HomeCreatePost";

const HomeContent = ({posts, user, getPosts}) => {
    const [openCreatePost, setOpenCreatePost] = useState(false);
    const [likedPosts, setLikedPosts] = useState([]);

    useEffect(() => {
        usersLikedPosts();
    }, [])

    const usersLikedPosts = () => {
        const token = JSON.parse(localStorage.getItem('token'));
        const formData = {
            headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}
        };
        fetch('http://localhost:5000/api/users/posts-liked', formData)
            .then(r => r.json())
            .then(response => {
                setLikedPosts(response.user_data.likes)
            })
            .catch(err => console.log(err));
    }

    return (
        <main className='content'>
            {openCreatePost && <HomeCreatePost setOpenCreatePost={setOpenCreatePost} getPosts={getPosts}/>}
            <HomeLeftNav user={user}/>
            <div className="posts-container">
                <div className='create-bar'>
                    <div>
                        <span className='icon-button'>😂</span>
                        <p onClick={() => setOpenCreatePost(prevState => !prevState)}>What's on your mind, {user.firstname}?</p>
                    </div>
                </div>
                <div className='posts-list'>
                    {posts.length > 0 && posts.map((data) => {
                        return (
                            <Post data={data} key={data._id} likedPosts={likedPosts}/>
                        )
                    })}
                </div>
            </div>

            <HomeContacts getPosts={getPosts}/>
        </main>
    )
}

export default HomeContent;