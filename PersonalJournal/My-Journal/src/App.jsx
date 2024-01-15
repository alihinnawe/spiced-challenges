import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newFormData = Object.fromEntries(formData);
    console.log("newFormData", newFormData);
    const name1 = formData.get("name");
    console.log("data name", name1);

    const text1 = formData.get("textArea");
    console.log("data text", text1);
  }
  const dateToday = new Date();
  console.log("dateToday", dateToday);

  function toggleStar() {
    const starImage = document.getElementById("starImage");
    console.log("toggleStar", starImage);
    // Check if the star is filled or empty
    if (starImage.src.includes("star-filled.svg")) {
      starImage.src = "./resources/star.svg"; // Change to empty star
    } else {
      starImage.src = "./resources/star-filled.svg"; // Change to filled star
    }
  }

  function toggleStar1() {
    const starImage = document.getElementById("starImage1");
    console.log("toggleStar", starImage);
    // Check if the star is filled or empty
    if (starImage.src.includes("star-filled.svg")) {
      starImage.src = "./resources/star.svg"; // Change to empty star
    } else {
      starImage.src = "./resources/star-filled.svg"; // Change to filled star
    }
  }

  return (
    <>
      <header>
        <h3>Welcome to my Webpage</h3>
      </header>
      <main>
        <form onSubmit={handleSubmit} className="My_Form">
          <h4>My Form</h4>
          <label htmlFor="text" id="text">
            Input:
          </label>
          <input
            name="name"
            type="text"
            className="Input_Class"
            placeholder="Type text"
          />
          <textarea
            className="text_Area"
            name="textArea"
            placeholder="Describe yourself"
          ></textarea>
          <button type="submit" className="form_button">
            Submit
          </button>
        </form>
        <section className="playlist_bar">
          {" "}
          Saaaaaaaaaaay what you want
          <ul className="Unordered_list">
            <li key="list1" className="list_name1">
              <h5>hi you {dateToday.toString()}</h5>
              <h4>THis is the first list </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
                sequi! Aut, eum modi. Quos fugit eaque sunt. Pariatur explicabo
                laboriosam quos minima. Quas deleniti eum asperiores
                exercitationem ipsa soluta id.
              </p>
              <img
                src="./resources/star-filled.svg"
                alt="Star"
                className="star"
                id="starImage"
                onClick={toggleStar}
              />
              list1
            </li>
            <li key="list2" className="list_name2">
              {" "}
              list2
            </li>
            <li key="list3" className="list_name3">
              list3
            </li>
            <li key="list4" className="list_name4">
              list4
            </li>
          </ul>
        </section>
        <section className="Faviorate_bar">
          {" "}
          Saaaaaaaaaaay what you want
          <ul className="Unordered_list">
            <li key="list1" className="list_name1">
              <h5>hi you {dateToday.toString()}</h5>
              <h4>THis is the first list </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
                sequi! Aut, eum modi. Quos fugit eaque sunt. Pariatur explicabo
                laboriosam quos minima. Quas deleniti eum asperiores
                exercitationem ipsa soluta id.
              </p>
              <img
                src="./resources/star-filled.svg"
                alt="Star"
                className="star"
                id="starImage1"
                onClick={toggleStar1}
              />
              list1
            </li>
            <li key="list2" className="list_name2">
              {" "}
              list2
            </li>
            <li key="list3" className="list_name3">
              list3
            </li>
            <li key="list4" className="list_name4">
              list4
            </li>
          </ul>
        </section>
      </main>
      <footer>
        {" "}
        <>
          <h1 className="footer_bar">@copyrights ALi Hinnawe</h1>
        </>
      </footer>
    </>
  );
}

export default App;
