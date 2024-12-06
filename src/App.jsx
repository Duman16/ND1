import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import RandomPlanet from './components/random-planet';
import People from './components/people';
import './styles/styles.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/planets" element={<RandomPlanet />} />
        <Route path="/people" element={<People />} />
      </Routes>
    </Router>
  );
};

export default App;
