/* eslint-disable */

import './reset.css';
import './common.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './components/header/header';
import Main from './components/main/main';
import About from './components/about/about';
import Project from './components/project/project';
import Contact from './components/contact/contact';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
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
