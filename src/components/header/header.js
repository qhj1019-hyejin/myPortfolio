import { Link } from "react-router-dom";
import style from './Header.module.css';
import mobileMenu from "./mobileMenu";

const header = (props) => {
    return (
        <header>
          <div className={style.headerInner}>
            <h1>I'm hyejin</h1>
            <nav className="pc">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/project">Project</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </nav>
            <div className={`mobile ${style.menu}` } onClick={ (e)=>{console.log('기다려봐')} }>
              <span className={style.burgur}>
                <span className={style.topLine}></span>
                <span className={style.botLine}></span>
              </span>
            </div>
          </div>
        </header>
    )
}
export default header;