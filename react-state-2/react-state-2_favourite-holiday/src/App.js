import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [holiday, setHoliday] = useState("");
  const [holidayDate, setDate] = useState("");
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    console.log("form data is", formData);
    const holidayValue = formData.get("holiday");

    setHoliday(holidayValue);

    const date1 = formData.get("datev");
    setDate(date1);
  }

  console.log("holiday issssssssssssssssssss", holiday);
  console.log("date issssssssssssssssssss", holidayDate);

  return (
    <div className="container">
      <h1>Favourite Holiday Data Storage</h1>
      <h2 id="favourite-holiday">Please tell us your favourite holiday!</h2>
      <form
        className="form"
        aria-labelledby="favourite-holiday"
        onSubmit={handleSubmit}
      >
        <label htmlFor="holiday">My Favourite Holiday: </label>
        <input
          id="holiday"
          type="text"
          name="holiday"
          placeholder="e.g. Christmas"
        />
        <label htmlFor="date">Date: </label>
        <input id="date" type="date" name="datev" />
        <button type="submit" className="form__submit-button">
          Submit
        </button>
      </form>
      <h2>Output of Submitted Data</h2>
      <p>
        Favourite Holiday: <span className="output">{holiday}</span>
      </p>
      <p>
        Date: <span className="output">{holidayDate}</span>
      </p>
    </div>
  );
}
