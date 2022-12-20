/* eslint-disable */

import './css/App.css';
import './css/reset.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Main from './components/main';
import About from './components/about';
import Project from './components/project';
import Contact from './components/contact';

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
                <li><Link to="/project">Project</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </nav>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/project" element={<Project/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
