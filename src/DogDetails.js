import React from "react";
import { useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";

/**Render DogDetails
 * 
 * Prop:
 *  - dogs
 */
function DogDetails({ dogs }) {

  const { name } = useParams();
  console.log("name: ", name);

  const dog = dogs.filter(d => d.name === name);
  console.log("dog: ", dog);
  const currentDog = dog[0];

  return (
    <>{(currentDog &&
      <div>
        <img src={`/${currentDog.src}.jpg`} alt={currentDog.name} />
        <h2>Name: {currentDog.name}</h2>
        <h3>Age: {currentDog.age}</h3>
        <ul>
          {currentDog.facts.map(fact =>
            <li key={uuid()}>{fact}</li>
          )}
        </ul>
      </div>
    )}
    </>);

}

export default DogDetails;