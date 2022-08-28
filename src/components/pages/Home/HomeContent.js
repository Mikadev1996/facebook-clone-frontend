import React, {useEffect, useState} from "react";
import HomeLeftNav from "./HomeLeftNav";
import HomeContacts from "./HomeContacts";
import Post from "../../Post";
import HomeCreatePost from "./HomeCreatePost";

const HomeContent = ({posts, user}) => {
    const [openCreatePost, setOpenCreatePost] = useState(false);


    return (
        <main className='content'>
            {openCreatePost && <HomeCreatePost setOpenCreatePost={setOpenCreatePost} />}
            <HomeLeftNav user={user}/>
            <div className="posts-container">
                <div className='create-bar'>
                    <div>
                        <span className='icon-button'>😂</span>
                        <p onClick={() => setOpenCreatePost(prevState => !prevState)}>What's on your mind, Charmika?</p>
                    </div>
                </div>
                <div className='posts-list'>
                    {posts.length > 0 && posts.map((data) => {
                        return (
                            <Post data={data} />
                        )
                    })}
                </div>
            </div>

            <HomeContacts />
        </main>
    )
}

export default HomeContent;