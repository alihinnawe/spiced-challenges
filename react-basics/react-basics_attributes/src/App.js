import React from "react";
import "./styles.css";

function ArticleComponent() {
  return (
    <>
      <article className="ArticleComponent">
        <h2 className="article__title">
          YTYhis is a header for the componenet
        </h2>
        <label htmlFor="input_class" className="input__input">
          This is a label
        </label>
        <div>
          <input title="Add some input" type="text" id="input_class" />
        </div>
        <div>
          <a href="http://wikipedia.org/">Visit Wikipedia</a>
        </div>
      </article>
    </>
  );
}
export default function App() {
  return (
    <div>
      <ArticleComponent />
    </div>
  );
}
