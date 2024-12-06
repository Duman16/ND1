class SwapiService {
    _apiBase = 'https://swapi.dev/api/';
  
    getResource = async (url) => {
      const res = await fetch(`${this._apiBase}${url}`);
      if (!res.ok) {
        throw new Error(`Could not fetch ${url}, received ${res.status}`);
      }
      return await res.json();
    };
  
    getAllPeople = async () => {
      const res = await this.getResource('people/');
      return res.results.map(this._transformPerson);
    };
  
    getPerson = async (id) => {
      const res = await this.getResource(`people/${id}`);
      return this._transformPerson(res);
    };
  
    getAllPlanets = async () => {
      const res = await this.getResource('planets/');
      return res.results.map(this._transformPlanet);
    };
  
    getPlanet = async (id) => {
      const res = await this.getResource(`planets/${id}`);
      return this._transformPlanet(res);
    };
  
    // Преобразование данных
    _transformPerson = (person) => ({
      id: this._extractId(person.url),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
    });
  
    _transformPlanet = (planet) => ({
      id: this._extractId(planet.url),
      name: planet.name,
      population: planet.population,
      climate: planet.climate,
    });
  
    _extractId = (url) => {
      const regExp = /\/([0-9]*)\/$/;
      return url.match(regExp)[1];
    };
  }
  export default SwapiService;
  