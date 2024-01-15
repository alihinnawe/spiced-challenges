import "./styles.css";
import { useState } from "react";
export default function App() {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    {
      isActive ? setIsActive(false) : setIsActive(true);
    }
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>Activate</button>
    </main>
  );
}
