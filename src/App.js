import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RoutesList from './RoutesList.js';
import Nav from './Nav';
import { useState, useEffect } from "react";
import axios from 'axios';

const BASE_URL = "http://localhost:5001/dogs";

/** Site App 
 * 
 * Sends axios request to get list of dogs.
 * 
 * State:
 *  - dogs
 */
function App() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    async function getDogs() {
      const response = await axios.get(BASE_URL);
      setDogs(response.data);
    };
    getDogs();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <RoutesList dogs={dogs} />
      </BrowserRouter>
    </div>
  );
}

export default App;
