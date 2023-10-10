import { useState, useEffect } from "react";
import countryService from "./services/countries";

const App = () => {
  //Define State

  const [country, setCountry] = useState(null);
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    if (country) {
      countryService
        .getAll(country)
        .then((returnedCountryData) => setCountryData(returnedCountryData));
    }
  }, [country]);

  const handleChange = (e) => {
    e.preventDefault();
    setCountry(e.target.value);
  };

  return (
    <div>
      <h1>Country Data</h1>
      <form>
        <span>Find Countries: </span>
        <input onChange={handleChange} placeholder="Search"></input>
      </form>
      <p>{countryData.common}</p>
    </div>
  );
};

export default App;
