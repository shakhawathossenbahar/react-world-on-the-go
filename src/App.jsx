import { Suspense } from "react";
import "./App.css";
import Countries from "./components/Countries/Countries";

const countriesApiCall = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/all");
  return res.json();
};

function App() {
  const countriesPromise = countriesApiCall();
  return (
    <>
      <Suspense fallback={<p>Nadir bhai loading</p>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  );
}

export default App;
