import "./FavoriteButton.css";
import { ReactComponent as StarFilled } from "./star-filled.svg";
import { ReactComponent as Star } from "./star.svg";
// import { useState } from "react";
// export default function FavoriteButton({}) {
//   const [isFavorite, setFavorite] = useState(false);
//   return (
//     <button
//       className="favorite-button"
//       onClick={() => {
//         setFavorite((prevIsFavorite) => !prevIsFavorite);
//       }}
//       aria-label="favorite"
//     >
//       {isFavorite ? <StarFilled /> : <Star />}
//     </button>
//   );
// }

export default function FavoriteButton({ onToggleFavorite, isFavorite, id }) {
  const handleClick = () => {
    // Call onToggleFavorite with the id as an argument
    onToggleFavorite(id);
  };
  return (
    <button
      className="favorite-button"
      onClick={handleClick}
      aria-label="favorite"
    >
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}
