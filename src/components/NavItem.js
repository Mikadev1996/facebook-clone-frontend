import React, {useEffect, useState} from 'react';

function NavItem(props) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        window.addEventListener("click", (e) => {
            if (e.target.classList.contains('content create-bar posts-container')) {
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