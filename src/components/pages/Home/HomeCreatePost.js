import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import { config } from '../../../Constants';

const HomeCreatePost = ({setOpenCreatePost, getPosts, user}) => {
    const [text, setText] = useState('');
    const nav = useNavigate();
    const url = config.url.BASE_URL;

    const submitPost = (e) => {
        const token = JSON.parse(localStorage.getItem('token'));

        e.preventDefault();
        const formData = JSON.stringify({
            text: text,
        })

        fetch(`${url}/posts/create`, {method: 'POST', body: formData, headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}})
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
                        <textarea placeholder={`What's on your mind, ${user.firstname}?`} onChange={e => setText(e.target.value)}/>
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