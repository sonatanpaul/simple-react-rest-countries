import { useState } from "react";
import "./Country.css";

export default function Country({ country }) {
  const [visit, setVisit] = useState(false);
  const handleVisit = () => {
    setVisit(!visit);
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
      </div>
    </>
  );
}
