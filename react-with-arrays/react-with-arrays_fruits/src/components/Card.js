import "./Card.css";

export default function Card({ props }) {
  console.log(props);
  const { name1, color } = props;
  return (
    <>
      <p className={`card--${color}`}>{name1}</p>
    </>
  );
}
