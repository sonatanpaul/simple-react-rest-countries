import { useState } from "react";
import "./Country.css";

export default function Country({
  country,
  handleVisitedCountries,
  handleCountryName,
}) {
  const [visit, setVisit] = useState(false);
  const handleVisit = () => {
    setVisit(!visit);
    handleVisitedCountries(country);
    // console.log(country);
  };
  return (
    <>
      <div className={`card ${visit && "cardBG"}`}>
        <h3>Country Name : {country.name.common}</h3>
        <img
          className="image"
          height={"200px"}
          width={"350px"}
          src={country.flags.png}
          alt=""
        />
        <p>Population : {country.population}</p>
        <button onClick={handleVisit}>
          {visit ? "Visited" : "Not Visited"}
        </button>
        <button onClick={() => handleCountryName(country.name.common)}>
          Add Title
        </button>
      </div>
    </>
  );
}
