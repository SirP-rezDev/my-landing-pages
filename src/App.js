import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import './App.css';

import Navbars from './Components/Navbars/Navbar';
import Body from './Components/Body/Body';
import Footer from './Components/Footer/footer';

function App() {
  const bodyRef = useRef(null);

  const scrollToBody = () => {
    if (bodyRef.current) {
      bodyRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/about">About</Link>
          {/* Use a button to trigger the scroll */}
          <button onClick={scrollToBody}>Home</button>
        </nav>

        <Routes>
          <Route path="/" element={<Body ref={bodyRef} />} />
          <Route path="/about" element={<Footer />} />
        </Routes>

        <Navbars />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
