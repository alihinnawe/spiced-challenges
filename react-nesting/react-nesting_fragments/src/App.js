import React from "react";
import "./styles.css";
import Box from "./components/Box";

function Boxes() {
  return (
    <div className="flex-container">
      <Box color="#007bff" />
      <Box color="#fc3" />
      <Box color="#ff3333" />
    </div>
  );
}

export default function App() {
  return (
    <main>
      <Boxes />
    </main>
  );
}
