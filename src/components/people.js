import React from 'react';
import withData from './with-data'; // Путь к файлу с учетом его местоположения
import '../styles/styles.css';  // от компонентов в src/components
import SwapiService from './api';



const PeopleList = ({ data }) => {
  return (
    <ul className="people-list">
      {data.map(person => (
        <li key={person.id}>{person.name}</li>
      ))}
    </ul>
  );
};

const getPeopleData = () => {
  const swapiService = new SwapiService();
  return swapiService.getAllPeople();
};

export default withData(PeopleList, getPeopleData);
