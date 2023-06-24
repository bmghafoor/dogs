import React from "react";
import { useParams } from "react-router-dom";

const Dog = ({ array }) => {
  const { dogName } = useParams();
  const dog = array.find((dog) => dog.name === dogName);
  console.log(dog);
  const name = dog.name;
  const age = dog.age;
  const src = dog.src;
  const facts = dog.facts;
  console.log(facts);

  return (
    <div>
      <h1>
        Hi my name is {name} and I am {age} years old
      </h1>
      <img src={src} alt=""></img>
      <img src="download.png" alt=""></img>
      <h2>Here are some cools facts about me</h2>
      <ul>
        {facts.map((fact) => (
          <li>{fact}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dog;
