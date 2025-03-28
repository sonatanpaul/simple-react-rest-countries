import { use, useState } from "react";
import Country from "../country/Country";
import "./Countries.css";

export default function Countries({ countriesPromise }) {
  const countries = use(countriesPromise);
  const [vistitCounrtry, setVisitCountry] = useState([]);
  const [title, setTitle] = useState("");

  function handleVisitedCountries(country) {
    setVisitCountry(country);
  }

  const handleCountryName = (titles) => {
    setTitle([...title, titles]);
  };
  console.log(title);
  return (
    <>
      <div className="card-container">
        <h1>Total Country : {countries.length}</h1>
        <h3>Visited Country : {vistitCounrtry.length} </h3>
        <p>{title}</p>
        <div className="card-item">
          {countries.map((country) => (
            <Country
              key={country.flag}
              handleVisitedCountries={handleVisitedCountries}
              country={country}
              handleCountryName={handleCountryName}
            />
          ))}
        </div>
      </div>
    </>
  );
}
