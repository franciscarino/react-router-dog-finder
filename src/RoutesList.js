import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Doglist from './Doglist';
import DogDetails from './DogDetails';


/** RoutesList component
 *
 * Renders routes: DogList, DogDetails
 */

function RoutesList({ dogs }) {
  console.log("RoutesList:", dogs);

  return (
    <Routes>
      <Route path="/dogs" element={<Doglist dogs={dogs} />} />
      <Route path="/dogs/:name" element={<DogDetails dogs={dogs} />} />
      <Route path="*" element={<Navigate to="/dogs" />} />
    </Routes>
  );
}

export default RoutesList;