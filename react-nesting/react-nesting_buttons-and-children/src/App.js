import React from "react";
import "./styles.css";

function Button({ children }) {
  return (
    <div>
      <button className="button_class" type="button">
        {children}
      </button>
    </div>
  );
}
export default function App() {
  return (
    <main>
      <Button>Hi there</Button>
      <Button>Hi here</Button>
    </main>
  );
}
