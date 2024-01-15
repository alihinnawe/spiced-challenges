import GlobalStyle from "../styles";
import { useState } from "react";
import Layout from "../components/Layout";

const initialLights = [
  {
    id: 1,
    name: "Living Room",
    ison: false,
  },
  {
    id: 2,
    name: "Kitchen",
    ison: false,
  },
  {
    id: 3,
    name: "Bedroom",
    ison: false,
  },
  {
    id: 4,
    name: "Bathroom",
    ison: false,
  },
  {
    id: 5,
    name: "Garage",
    ison: false,
  },
  {
    id: 6,
    name: "Porch",
    ison: false,
  },
  {
    id: 7,
    name: "Garden",
    ison: false,
  },
  {
    id: 8,
    name: "Office",
    ison: false,
  },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialLights);
  const [ison, setIsOn] = useState(false);

  // console.log("app: ", lights);

  function handleToggle(id) {
    console.log("App ID:", id);
    console.log("App ison:", ison);

    setLights(
      lights.map((light) => {
        light.id === id ? { ...lights, ison: !ison } : light;
      })
    );
  }

  return (
    <Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        ison={ison}
        handleToggle={handleToggle}
      />
    </Layout>
  );
}
