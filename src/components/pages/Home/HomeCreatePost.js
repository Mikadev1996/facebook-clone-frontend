import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';

const HomeCreatePost = ({setOpenCreatePost, getPosts}) => {
    const [text, setText] = useState('');
    const nav = useNavigate();

    const submitPost = (e) => {
        const token = localStorage.getItem('token');

        e.preventDefault();
        const formData = JSON.stringify({
            text: text,
        })

        fetch('http://localhost:5000/api/post/create', {method: 'POST', body: formData, headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}})
            .then(r => r.json())
            .then(data => {
                if (data.error) {
                    localStorage.removeItem('token');
                    nav('/');
                    return;
                }
                setOpenCreatePost(prevState => !prevState);
                getPosts();
            })
    }

    return (
        <div id='create-post-dropdown-container'>
            <div id='create-dropdown'>
                <div className='create-container'>
                    <div className='create-post-header'>
                        <h1>Create post</h1>
                    </div>

                    <div className='create-input-section'>
                        <textarea placeholder="What's on your mind, Charmika?" onChange={e => setText(e.target.value)}/>
                    </div>

                    <div className='add-image-section'>
                        <p>Add to your post</p>
                    </div>

                    <div className='create-buttons'>
                        <button id='create-post' onClick={e => submitPost(e)}>
                            Post
                        </button>
                        <button id='cancel-create' onClick={() => {setOpenCreatePost(prevState => !prevState)}}>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeCreatePost;