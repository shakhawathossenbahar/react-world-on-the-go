import React, { useState } from 'react';
import "./Country.css"

const Country = ({country, handleVisitedCountries}) => {
   // console.log(country.area.area);



   const [visited, setVisited] = useState(false);

   const handleVisited = () => {
      // 1st system
      // if(visited) setVisited(false)
      // else setVisited(true)

      // 2nd system
      // setVisited(visited? false : true)

      // 3rd system
      setVisited(!visited);
      handleVisitedCountries(country);
   }

   return (
      // Add css class name here
      <div className={`country ${visited && "country-visited"}`}>
         <img src={country.flags.flags.png} alt={country.flags.flags.alt} />

         <h3>Name: {country.name.common}</h3>

         <p>Population: {country.population.population}</p>

         <p>Area: {country.area.area} km<sup>2</sup> + {country.area.area > 300000 ? "Big Country" : "Small Country"}</p>

         <button onClick={handleVisited}>
            {visited? "Visited" : "Not visited"}
         </button>
      </div>
   );
};

export default Country;