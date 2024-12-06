import React from 'react';
import Header from './components/header';
import RandomPlanet from './components/random-planet';
import People from './components/people';
import './styles/styles.css';


const App = () => {
  return (
    <div>
      <Header />
      <RandomPlanet />
      <People />
    </div>
  );
};

export default App;
