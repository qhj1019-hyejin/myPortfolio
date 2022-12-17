/* eslint-disable */

import './css/App.css';
import './css/reset.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Main from './components/main';
import About from './components/about';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <div className='headerInner'>
            <h1>I'm hyejin</h1>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><a>Project</a></li>
                <li><a>Contact</a></li>
              </ul>
            </nav>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
