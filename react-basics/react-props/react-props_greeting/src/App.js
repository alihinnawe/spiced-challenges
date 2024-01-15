import "./styles.css";

function Greeting({ name }) {
  const coaches = ["Ali", "Alice", "Bob"];
  return (
    <h1>
      {coaches.includes(name) ? (
        <span>Hello Coach! </span>
      ) : (
        <h1> Hello {name}!</h1>
      )}
    </h1>
  );
}

export default function App() {
  return (
    <>
      <h1>
        <Greeting name={"Ali"} />
      </h1>
      <h1>
        <Greeting name={"Samer"} />
      </h1>
    </>
  );
}
