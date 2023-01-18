import style from './Header.module.css';
import { Link } from "react-router-dom";
import { useState } from 'react';

const MobileMenu = (props) => {

    return (
        <div className={props.mobileMenu ? "show-menu" : "hide-menu"}>
            <nav className={style.mobileMenu}>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/project">Project</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </nav>
        </div>
    )

}
export default MobileMenu;