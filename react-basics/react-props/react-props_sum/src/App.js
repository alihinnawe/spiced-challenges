import React from "react";
import "./styles.css";

function Sum({ valueA, valueB }) {
  return valueA + valueB;
}
export default function App() {
  return (
    <h1>
      {" "}
      The sum of two values is: <br />
      <Sum valueA={1} valueB={2} />
    </h1>
  );
}
