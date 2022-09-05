import React from "react";
import { useParams } from "react-router-dom";

function DogDetails() {

  // const { name, age, src, facts } = useParams();
  const { name, age, src, facts } = useParams();

  return (
    <>
      <img src={`${src}.jpg`} alt={src} />
      <h2>Name: {name}</h2>
      <h3>Age: {age}</h3>
      <ul>
        {facts.map(fact =>
          <li>{fact}</li>
        )}
      </ul>
    </>
  );
}

// {
//   "name": "Whiskey",
//   "age": 5,
//   "src": "whiskey",
//   "facts": [
//     "Whiskey loves eating popcorn.",
//     "Whiskey is a terrible guard dog.",
//     "Whiskey wants to cuddle with you!"
//   ]
// }

export default DogDetails;