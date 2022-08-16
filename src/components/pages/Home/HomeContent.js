import React, {useState} from "react";
import HomeLeftNav from "./HomeLeftNav";
import HomeContacts from "./HomeContacts";

const HomeContent = () => {
    return (
        <main className='content'>
            <HomeLeftNav />
            <div className="posts-container">
                <div className='create-bar'>
                    <div>
                        <span className='icon-button'>😂</span>
                        <p>What's on your mind, Charmika?</p>
                    </div>
                </div>
            </div>
            <HomeContacts />
        </main>
    )
}

export default HomeContent;