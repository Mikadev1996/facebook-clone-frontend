import React, {useState} from "react";
import HomeLeftNav from "./HomeLeftNav";
import HomeContacts from "./HomeContacts";
import Post from "../../Post";
import HomeCreatePost from "./HomeCreatePost";

const HomeContent = () => {
    const [openCreatePost, setOpenCreatePost] = useState(false);

    return (
        <main className='content'>
            {openCreatePost && <HomeCreatePost setOpenCreatePost={setOpenCreatePost} />}
            <HomeLeftNav />
            <div className="posts-container">
                <div className='create-bar'>
                    <div>
                        <span className='icon-button'>😂</span>
                        <p onClick={() => setOpenCreatePost(prevState => !prevState)}>What's on your mind, Charmika?</p>
                    </div>
                </div>
                <div className='posts-list'>
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </div>
            </div>

            <HomeContacts />
        </main>
    )
}

export default HomeContent;