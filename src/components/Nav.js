import React, { useState, useEffect } from "react";
import NavItem from "./NavItem";
import DropdownMenu from "./DropDownMenu";

const Nav = ({user, toggleTheme}) => {
    return (
        <nav>
            <div className='nav-container'>
                <div className='nav-logo github-logo'>
                    <a href='https://github.com/Mikadev1996'>
                        <img src="https://i.imgur.com/qanvhn7.png" alt="github"/>
                    </a>
                </div>
                <div className='home-logo'>
                    <a href="/home">
                        <img src="https://i.imgur.com/1j2oqFr.png" alt='home' />
                    </a>
                </div>
                <div className='nav-last'>
                    <NavItem icon="😍">
                        <DropdownMenu user={user} toggleTheme={toggleTheme}/>
                    </NavItem>
                </div>
            </div>
        </nav>
    )
}

export default Nav;