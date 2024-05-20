import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Lab7 from './pages/lab7';
import Lab8 from './pages/lab8';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/lab7">Lab 7</Link></li>
            <li><Link to="/lab8">Lab 8</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/lab7" element={<Lab7 />} />
          <Route path="/lab8" element={<Lab8 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
