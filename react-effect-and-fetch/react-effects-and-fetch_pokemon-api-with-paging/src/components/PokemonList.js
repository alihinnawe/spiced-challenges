import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [offset, setOffset] = useState(0);
  // const [previousButtonDisabled, setPreviousButtonDisabled] = useState(true);

  useEffect(() => {
    async function loadPokemon(offset) {
      console.log("offset issssssssssssssssssssss:", offset);
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${offset}`
        );
        const data = await response.json();
        setPokemon(data.results);
        // setPreviousButtonDisabled(offset === 0);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon(offset);
  }, [offset]);

  function nextPage() {
    setOffset(offset + 20);
  }

  function PreviousPage() {
    setOffset(offset - 20);
  }

  return (
    <main>
      <button onClick={nextPage} type="button">
        Next Page
      </button>

      <button disabled={offset === 0} onClick={PreviousPage} type="button">
        Previous Page
      </button>

      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
