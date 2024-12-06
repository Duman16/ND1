import React, { Component } from 'react';
import SwapiService from './api';
import Spinner from './spinner';
import ErrorIndicator from './error-indicator';
import '../styles/styles.css';  // от компонентов в src/components


export default class RandomPlanet extends Component {
  state = {
    planet: {},
    loading: true,
    error: false,
  };

  swapiService = new SwapiService();

  componentDidMount() {
    this.updatePlanet();
  }

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 25 + 2);
    this.swapiService.getPlanet(id)
      .then(planet => {
        this.setState({
          planet,
          loading: false,
        });
      })
      .catch(() => {
        this.setState({
          error: true,
          loading: false,
        });
      });
  };

  render() {
    const { planet, loading, error } = this.state;

    if (error) {
      return <ErrorIndicator />;
    }

    if (loading) {
      return <Spinner />;
    }

    const { name, population, climate } = planet;

    return (
      <div className="random-planet">
        <h3>{name}</h3>
        <p>Population: {population}</p>
        <p>Climate: {climate}</p>
      </div>
    );
  }
}
