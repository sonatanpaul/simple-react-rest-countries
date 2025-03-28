import { use } from "react";
import Country from "../country/Country";

export default function Countries({ countriesPromise }) {
  const countries = use(countriesPromise);
  console.log(countries);
  return (
    <>
      <h1>Hello WOrld {countries.length}</h1>
      {countries.map((country) => (
        <Country country={country} />
      ))}
    </>
  );
}
