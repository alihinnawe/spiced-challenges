import Link from "../components/Link";
import Lights from "../components/Lights";

export default function Rooms({ lights, ison, handleToggle }) {
  console.log("LIGHTS are 111111111: ", lights);
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>All Lights</h1>
      <Lights lights={lights} ison={ison} handleToggle={handleToggle} />
    </>
  );
}
