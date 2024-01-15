import React from "react";
import "./styles.css";
import Form from "./components/Form.js";
import { useState } from "react";
export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email");

    setEmail(email);

    const name = formData.get("name");
    setName(name);
  }

  return (
    <div className="container">
      <h1>Personal Details Form</h1>
      <Form handleSubmit={handleSubmit} />
      <h2>Your submitted details:</h2>
      <p>
        Name: <span className="output">{name}</span>
      </p>
      <p>
        Email: <span className="output">{email}</span>
      </p>
    </div>
  );
}
