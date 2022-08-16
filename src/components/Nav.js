import React, { useState, useEffect } from "react";
import NavItem from "./NavItem";
import DropdownMenu from "./DropDownMenu";

const Nav = () => {

    useEffect(() => {
        let storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
        if (storedTheme) {
            document.documentElement.setAttribute('data-theme', storedTheme)
        }
    }, []);

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
                <div className='centre-nav'>
                    <NavItem icon="😍">
                        <DropdownMenu/>
                    </NavItem>
                </div>
            </div>
        </nav>
    )
}

export default Nav;