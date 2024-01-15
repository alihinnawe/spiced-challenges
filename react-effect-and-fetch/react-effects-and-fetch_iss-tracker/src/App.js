import { useEffect, useState } from "react";
import Controls from "./components/Controls";
import Map from "./components/Map";
import "./styles.css";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function App() {
  const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  });

  useEffect(() => {
    async function getISSCoords() {
      try {
        const fetchUrl = await fetch(URL);
        const data = await fetchUrl.json();
        const { longitude, latitude } = data;
        setCoords({ longitude, latitude });
      } catch (error) {
        console.error("Error fetching ISS coordinates:", error);
      }
    }

    getISSCoords(); // Call the function here to get initial coordinates

    // Set up interval to refresh ISS coordinates every 10 seconds
    const intervalId = setInterval(getISSCoords, 10000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [coords]); // Empty dependencies array to run the effect only on mount

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls longitude={coords.longitude} latitude={coords.latitude} />
    </main>
  );
}
