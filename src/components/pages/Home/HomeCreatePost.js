import React from "react";

const HomeCreatePost = ({setOpenCreatePost}) => {

    return (
        <div id='create-post-dropdown-container'>
            <div id='create-dropdown'>
                <div className='create-container'>
                    <div className='create-post-header'>
                        <h1>Create post</h1>
                    </div>

                    <div className='create-input-section'>
                        <textarea placeholder="What's on your mind, Charmika?"/>
                    </div>

                    <div className='add-image-section'>
                        <p>Add to your post</p>
                    </div>

                    <div className='create-buttons'>
                        <button id='create-post'>
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