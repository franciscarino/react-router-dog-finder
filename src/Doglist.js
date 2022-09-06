import { React } from "react";
import { Link } from "react-router-dom";
import { v4 as uuid } from 'uuid';
import "./Doglist.css";

/**Render Doglist
 * 
 * Prop:
 *  - dogs
 */
function Doglist({ dogs }) {
  return (
    <>
      {dogs.map(({ name, src }) =>
        <div key={uuid()}>
          <img src={`/${src}.jpg`} alt={src} />
          <Link to={`/dogs/${name}`} ><h2>{name}</h2></Link>
        </div>
      )}
    </>
  );

}

export default Doglist;