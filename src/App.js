import './App.css';
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_GNEWS_API;
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <Routes>
          <Route path="/" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="us" category="world" />} />
          <Route path="/world" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="us" category="world" />} />
          <Route path="/business" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="us" category="business" />} />
          <Route path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="us" category="entertainment" />} />
          <Route path="/general" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="us" category="general" />} />
          <Route path="/health" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="us" category="health" />} />
          <Route path="/science" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="us" category="science" />} />
          <Route path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="us" category="sports" />} />
          <Route path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="us" category="technology" />} />
          <Route path="*" element={<div style={{ textAlign: 'center', marginTop: '100px' }}>404 - Page not found</div>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
