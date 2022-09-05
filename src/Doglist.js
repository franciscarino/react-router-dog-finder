import { React, useEffect, useState } from "react";
import axios from 'axios';
import { v4 as uuid } from 'uuid';

const BASE_URL = "http://localhost:5001/dogs";

// let dogsList = await getDogs();


function Doglist() {

  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    async function getDogs() {
      const response = await axios.get(BASE_URL);
      // dogsList = response.data;
      // console.log('test getDogs');
      // console.log('resp', response);
      // console.log('data', response.data);
      setDogs(response.data);
      console.log("resp.data", response.data);
      console.log('dogs', dogs);
    };
    getDogs();
  }, []);

  // console.log("dogslist is", dogsList);
  return (
    <>
      {dogs.map(dog =>
        <div key={uuid()}>
          <img src={`${dog.src}.jpg`} alt={dog.src} />
          <h2>Name: {dog.name}</h2>
        </div>
      )}
    </>
  );

}

export default Doglist;