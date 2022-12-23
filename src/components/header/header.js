import { Link } from "react-router-dom";
import style from './Header.module.css';

const header = (props) => {
    return (
        <header>
          <div className={style.headerInner}>
            <h1>I'm hyejin</h1>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/project">Project</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </nav>
          </div>
        </header>
    )
}
export default header;