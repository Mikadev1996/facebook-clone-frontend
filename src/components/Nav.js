import React, { useState, useEffect } from "react";

const Nav = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        handleDarkModeToggle();
    }, []);

    const handleDarkModeToggle = () => {
        let toggle = document.getElementById("theme-toggle");

        let storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
        if (storedTheme) {
            document.documentElement.setAttribute('data-theme', storedTheme)
        }

        localStorage.getItem('theme') === 'light' ? setDarkMode(false) : setDarkMode(true);

        toggle.onclick = () => {
            setDarkMode(darkMode => !darkMode);
            let currentTheme = document.documentElement.getAttribute("data-theme");
            let targetTheme = "light";

            if (currentTheme === "light") {
                targetTheme = "dark";
            }

            document.documentElement.setAttribute('data-theme', targetTheme)
            localStorage.setItem('theme', targetTheme);
        };
    }

    return (
        <nav>
            <div className='nav-logo'>
                <a href='https://github.com/Mikadev1996'>
                    <img src="https://i.imgur.com/qanvhn7.png" alt=""/>
                </a>
            </div>
            <div>
                <p>Home Icon</p>
                <p>Friends Page</p>
            </div>
            <div className='centre-nav'>
                Profile Pic/Nav settings
                <button id='theme-toggle'>Toggle theme</button>
            </div>
        </nav>
    )
}

export default Nav;