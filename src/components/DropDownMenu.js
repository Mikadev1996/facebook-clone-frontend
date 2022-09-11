import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { CSSTransition } from "react-transition-group";
import { ReactComponent as ArrowIcon } from '../styles/icons/arrow.svg';
import { ReactComponent as CogIcon } from '../styles/icons/cog.svg';
import { ReactComponent as ChevronIcon } from '../styles/icons/chevron.svg';
import { ReactComponent as LogOutIcon } from '../styles/icons/logout_icon.svg';

function DropdownMenu({user}) {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);
    const nav = useNavigate();

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    function DropdownItem(props) {

        useEffect(() => {
            handleDarkModeToggle();
        }, []);

        return (
            <a href="#" className="menu-item" onClick={() => {
                if (props.action) {
                    props.action()
                    return;
                }
                props.goToMenu && setActiveMenu(props.goToMenu)
            }}>
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
                <span className="icon-right">{props.rightIcon}</span>
            </a>
        );
    }

    const handleDarkModeToggle = () => {
        let toggle = document.getElementById("theme-toggle");
        if (toggle === null) {
            return;
        }

        let storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
        if (storedTheme) {
            document.documentElement.setAttribute('data-theme', storedTheme)
        }

        toggle.onclick = () => {
            let currentTheme = document.documentElement.getAttribute("data-theme");
            let targetTheme = "light";

            if (currentTheme === "light") {
                targetTheme = "dark";
            }

            document.documentElement.setAttribute('data-theme', targetTheme)
            localStorage.setItem('theme', targetTheme);
        };
    }

    const handleLogOut = () => {
        fetch('http://localhost:5000/api/users/log-out', {method: 'POST'})
            .then(r => r.json())
            .then(data => {
                localStorage.removeItem('token');
                nav('/');
            })
    }

    return (
        <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

            <CSSTransition
                in={activeMenu === 'main'}
                timeout={500}
                classNames="menu-primary"
                unmountOnExit
                onEnter={calcHeight}>
                <div className="menu">
                    <a href={`/profile/${user._id}`} className="menu-item-profile" >
                        <div className='profile-container'>
                            <div>
                                <span className="icon-button">😎</span>
                                <p>{user.firstname + " " + user.surname}</p>
                            </div>
                        </div>
                    </a>
                    <DropdownItem
                        leftIcon={<CogIcon />}
                        rightIcon={<ChevronIcon />}
                        goToMenu="settings">
                        Settings
                    </DropdownItem>
                    <DropdownItem leftIcon={<LogOutIcon />} action={handleLogOut}>
                        <p onClick={() => handleLogOut()}>Log Out</p>
                    </DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'settings'}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
                onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
                        <h2>Back</h2>
                    </DropdownItem>
                    <DropdownItem leftIcon="🌗">
                        <button id='theme-toggle'>Toggle theme</button>
                    </DropdownItem>
                </div>
            </CSSTransition>
        </div>
    );
}

export default DropdownMenu