import style from './Header.module.css';
import { useState } from 'react';

const mobileMenu = (props) => {

    const closeModal = () => {
        props.setModalOpen(false);
    }

    return (
        <div  className={`pageArea ${style.mobileMenuWrap}`} >
            <div>열었다.</div>
        </div>
    )

}
export default mobileMenu;