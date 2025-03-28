import "./Country.css";

export default function Country({ country }) {
  const handleVisit = () => {
    console.log("Visited");
  };
  return (
    <>
      <div className="card">
        <h3>Country Name : {country.name.common}</h3>
        <img height={"200px"} width={"300px"} src={country.flags.png} alt="" />
        <p>Population : {country.population}</p>
        <button onClick={handleVisit}>Not Visited</button>
      </div>
    </>
  );
}
