import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1337,
      name1: "Banana",
      color: "yellow",
    },
    {
      id: 1338,
      name1: "Apple",
      color: "green",
    },
    {
      id: 1339,
      name1: "Grapes",
      color: "red",
    },
    {
      id: 1340,
      name1: "Mango",
      color: "green",
    },
    {
      id: 1341,
      name1: "Akidenia",
      color: "yellow",
    },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card key={fruit.id} props={fruit} />
      ))}
    </div>
  );
}
