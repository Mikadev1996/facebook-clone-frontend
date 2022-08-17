import React, {useState} from "react";
import Footer from "../../Footer";
import Nav from "../../Nav";
import HomeContent from "./HomeContent";
import HomeCreatePost from "./HomeCreatePost";

const Home = () => {

    return (
        <div className='app'>
            <Nav />
            <HomeContent />
            <Footer />
        </div>
    )
}

export default Home;