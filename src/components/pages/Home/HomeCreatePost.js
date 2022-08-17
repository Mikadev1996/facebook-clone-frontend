import React from "react";

const HomeCreatePost = ({setOpenCreatePost}) => {

    return (
        <div id='create-post-dropdown-container'>
            <div id='create-dropdown'>
                <div className='create-container'>
                    <div>
                        <h1>Create post</h1>
                    </div>

                    <div>
                        <input placeholder="What's on your mind, Charmika?"/>
                    </div>

                    <div>
                        <p>Add to your post</p>
                    </div>

                    <div>
                        <button>
                            Post
                        </button>
                        <button onClick={() => {setOpenCreatePost(prevState => !prevState)}}>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeCreatePost;