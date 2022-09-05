import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Doglist from './Doglist';
import DogDetails from './DogDetails';


/** RoutesList component
 *
 * Renders routes: DogList, DogDetails
 */

function RoutesList() {

  return (
    <Routes>
      <Route path="/dogs" element={<Doglist />} />
      <Route path="/dogs/:name" element={<DogDetails />} />
    </Routes>
  );
}

export default RoutesList;