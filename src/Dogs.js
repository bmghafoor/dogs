import React from "react";
import { Link } from "react-router-dom";

const Dogs = ({ dogs }) => {
  return (
    <div>
      <h1>Meet the dogs</h1>
      <ul>
        {dogs.map((dog) => (
          <li>
            <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dogs;
