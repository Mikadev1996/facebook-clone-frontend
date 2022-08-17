import React, {useEffect, useState} from 'react';

function NavItem(props) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        window.addEventListener("click", (e) => {
            if (e.target.classList.contains('content') ||
                e.target.classList.contains('post-container') ||
                e.target.classList.contains('create-bar')
            ) {
                setOpen(false);
            }
        })
    },[])

    return (
        <li className="nav-item">
            <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
                {props.icon}
            </a>

            {open && props.children}
        </li>
    );
}

export default NavItem;