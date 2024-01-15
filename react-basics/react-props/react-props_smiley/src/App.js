import React from "react";
import "./styles.css";

function Smiley({ isHappy }) {
  return <h1>{isHappy ? "Happy" : "Sad"}</h1>;
}

export default function App() {
  return (
    <h1>
      <Smiley isHappy />
    </h1>
  );
}
