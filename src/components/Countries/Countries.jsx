import { use, useState } from "react"
import Country from "../Country/Country";
import "./Countries.css"

export default function Countries({countriesPromise}) {
   

   const [visitedCountries, setVisitedCountries] = useState([])
   

   const handleVisitedCountries = (country) =>{
      console.log("handle visited countries clicked", country);
      const newVisitedCountries = [...visitedCountries, country];
      setVisitedCountries(newVisitedCountries);
   }


   const countriesData = use(countriesPromise);
   const countries = countriesData.countries;


   return(
      <div>
         <div className="headline">
            <h1>Total countries: {countries.length}</h1>
            <h1>Countries Visited: {visitedCountries.length}</h1>
         </div>

         <div className="countries">
         {
            countries.map(country => <Country 
               key={country.cca3.cca3}
               country={country}
               handleVisitedCountries = {handleVisitedCountries}
               ></Country>)
         }
         </div>
      </div>
   )
}