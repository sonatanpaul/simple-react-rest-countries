import { Suspense } from "react";
import Countries from "./components/countries/Countries";

const countriesPromise = fetch("https://restcountries.com/v3.1/all").then(
  (response) => response.json()
);

function App() {
  return (
    <>
      <Suspense fallback={<p>waiting for message...</p>}>
        <Countries countriesPromise={countriesPromise} />
      </Suspense>
    </>
  );
}

export default App;
