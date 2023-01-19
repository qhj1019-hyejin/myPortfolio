import { Link } from "react-router-dom";
import style from './Header.module.css';
import MobileMenu from "./mobileMenu";
import { useState } from "react";

const Header = (props) => {

  const [mobileMenu, setMobileMenu] = useState(false);  // 모바일 메뉴 초기값 false

  const toggleMenu  = () => {
    setMobileMenu(mobileMenu => !mobileMenu); // on , off
  }

  return (
      <header className={mobileMenu ? "shadowOn" : "shadowOff"} >
        <div className={style.headerInner}>
          <h1><Link to="/">I'm hyejin</Link></h1>
            <nav className="pc">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/project">Project</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </nav>
            <div className={`mobile ${style.menu} ${mobileMenu ? "mobileMenuOff" : ""} `} onClick={()=>toggleMenu()} >
              <span></span>
              <span></span>
              <span></span>
            </div>
        </div>
        {
          mobileMenu == true ? <MobileMenu mobileMenu={mobileMenu} /> : null // 모달 팝업
        }
      </header>
  )
}
export default Header;