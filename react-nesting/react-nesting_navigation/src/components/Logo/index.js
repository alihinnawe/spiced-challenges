import logo from "../../img/logo.jpg";
import Image from "../../components/Image";
export default function Logo() {
  return (
    <>
      <button
        type="button"
        onClick={() => console.log("I could toggle a profile!")}
        aria-label="toggle profile"
      >
        <Image src={logo} alt="logo" />
      </button>
    </>
  );
}
