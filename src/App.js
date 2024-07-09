import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page1 from './pages/page1'
import Page2 from './pages/page2'


function App() {
  return (
  <>
    
    <Router>
      <Routes>
        <Route path='/' element={<Page1/>} />
        <Route path='/:pais' element={<Page2/>} />
      </Routes>



    </Router>
 
 
  </>
  );
}

export default App;
