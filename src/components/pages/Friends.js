import React from "react";
import Nav from "../Nav";
import Footer from "../Footer";

const Friends = () => {
    return (
        <div className='app'>
            <Nav />
            <main className='friends-content'>
                <div className='post-1'>
                    <h2 className="contacts-header">
                        Send a friend request!
                    </h2>
                    <ul className="contacts-list">
                        <li className="content-nav-item">
                            <a href='/profile'><span className='icon-button'>😁</span></a>
                            <p>Friend 1</p>
                            <span className='icon-right'>➕</span>
                        </li>

                        <li className="content-nav-item">
                            <a href='/profile'><span className='icon-button'>😊</span></a>
                            <p>Friend 2</p>
                            <span className='icon-right'>➕</span>
                        </li>

                        <li className="content-nav-item">
                            <a href='/profile'><span className='icon-button'>🤑</span></a>
                            <p>Friend 3</p>
                            <span className='icon-right'>➕</span>

                        </li>
                    </ul>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default Friends;