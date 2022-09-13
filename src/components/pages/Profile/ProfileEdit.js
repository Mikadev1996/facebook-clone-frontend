import React, {useState} from "react";
import {useNavigate, useParams} from 'react-router-dom';
import { config } from '../../../Constants';

const ProfileEdit = ({setOpenProfileEdit, setBio, setDob}) => {
    const { id } = useParams();
    const [text, setText] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const nav = useNavigate();
    const url = config.url.BASE_URL;

    const updateProfile = (e) => {
        e.preventDefault();
        const token = JSON.parse(localStorage.getItem('token'));
        const formData = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
            body: JSON.stringify({
                biography: text,
                date_of_birth: dateOfBirth
            })
        }

        fetch(`${url}/users/${id}/biography`, formData)
            .then(r => r.json())
            .then(data => {
                if (data.error) {
                    localStorage.removeItem('token');
                    nav('/');
                    return;
                }
                setBio(text);
                setDob(dateOfBirth);
                setOpenProfileEdit(prevState => !prevState);
            })
    }

    return (
        <div id='create-post-dropdown-container'>
            <div id='create-dropdown'>
                <div className='create-container'>
                    <div className='create-post-header'>
                        <h1>Edit Profile</h1>
                    </div>

                    <div className='create-input-section'>
                        <textarea placeholder="Enter your biography!" onChange={e => setText(e.target.value)}/>
                    </div>

                    <div className='create-input-section'>
                        <label htmlFor='date_of_birth'>Date of Birth</label>
                    <input type='date' id='date_of_birth' name='date_of_birth' onChange={(e) => setDateOfBirth(e.target.value)}/>
                    </div>

                    <div className='create-buttons'>
                        <button id='create-post' onClick={e => updateProfile(e)}>
                            Update
                        </button>
                        <button id='cancel-create' onClick={() => {setOpenProfileEdit(prevState => !prevState)}}>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileEdit;