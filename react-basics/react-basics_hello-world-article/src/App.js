import React from "react";
import "./styles.css";

function HelloWorldArticle() {
  return (
    <article className="HelloWorldArticle">
      <h1> This is more advanced article componenet</h1>
      <p>This is a paragraph one</p>
    </article>
  );
}
export default function App() {
  return (
    <div>
      <HelloWorldArticle />
    </div>
  );
}
