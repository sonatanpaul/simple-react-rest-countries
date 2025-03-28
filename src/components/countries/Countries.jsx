import { use } from "react";
import Country from "../country/Country";
import "./Countries.css";

export default function Countries({ countriesPromise }) {
  const countries = use(countriesPromise);
  return (
    <>
      <div className="card-container">
        <h1>Total Country : {countries.length}</h1>
        <div className="card-item">
          {countries.map((country) => (
            <Country key={country.flag} country={country} />
          ))}
        </div>
      </div>
    </>
  );
}
