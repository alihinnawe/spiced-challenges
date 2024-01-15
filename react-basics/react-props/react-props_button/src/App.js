import React from "react";
import "./styles.css";

function Button({ text, color, isDisabled }) {
  return (
    <button
      onClick={() => alert("You clicked me!")}
      disabled={isDisabled}
      style={{ height: "100px", backgroundColor: color }}
    >
      {text}
    </button>
  );
}
export default function App() {
  return (
    <>
      <Button text={"hello button"} color={"green"} isDisabled={false} />
    </>
  );
}
