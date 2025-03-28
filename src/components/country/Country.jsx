export default function Country({ country }) {
  console.log(country);
  return (
    <>
      <h3>Country Name : {country.name.common}</h3>
    </>
  );
}
