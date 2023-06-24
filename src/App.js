import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dogs from "./Dogs";
import Dog from "./Dog";
import whiskey from "./whiskey.jpg";
import duke from "./duke.jpg";
import perry from "./perry.jpg";
import tubby from "./tubby.jpg";

function App() {
  App.defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!",
        ],
      },
      {
        name: "Duke",
        age: 3,
        src: duke,
        facts: [
          "Duke believes that ball is life.",
          "Duke likes snow.",
          "Duke enjoys pawing other dogs.",
        ],
      },
      {
        name: "Perry",
        age: 4,
        src: perry,
        facts: [
          "Perry loves all humans.",
          "Perry demolishes all snacks.",
          "Perry hates the rain.",
        ],
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is really stupid.",
          "Tubby does not like walks.",
          "Angelina used to hate Tubby, but claims not to anymore.",
        ],
      },
    ],
  };
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/dogs"
            element={<Dogs dogs={App.defaultProps.dogs} />}
          ></Route>
          <Route
            exact
            path="/dogs/:dogName"
            element={<Dog array={App.defaultProps.dogs} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
