import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Layout from '../components/Layout'
import React from 'react';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path ="/" element={<Layout />} />
      </Routes>
   
    </div>
  );
}

export default App;