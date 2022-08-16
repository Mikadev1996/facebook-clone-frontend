import React, {useState} from "react";
import HomeLeftNav from "./HomeLeftNav";
import HomeContacts from "./HomeContacts";

const HomeContent = () => {
    return (
        <main className='content'>
            <HomeLeftNav />
            <div className="posts-container">

            </div>
            <HomeContacts />
        </main>
    )
}

export default HomeContent;