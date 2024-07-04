"use client";

import React, { useEffect } from "react";

type Pokemon = {
  id: number;
  name: string;
  korean_name: string;
  height: number;
  weight: number;
  sprites: { front_default: string };
  types: { type: { name: string; korean_name: string } }[];
  abilities: { ability: { name: string; korean_name: string } }[];
  moves: { move: { name: string; korean_name: string } }[];
};

function PokemonList() {
  const [pokemonData, setPokemonData] = React.useState<Pokemon[]>([]);

  useEffect(() => {
    const getPokeData = async () => {
      const res = await fetch("/api/pokemons");
      const data = await res.json();
      setPokemonData(data);
      console.log(data);
    };
    getPokeData();
    console.log(pokemonData);
  }, []);

  return (
    <div>
      {pokemonData.map((pokemon: Pokemon) => {
        return (
          <div key={pokemon.id}>
            <img src={pokemon.sprites.front_default} />
            {pokemon.korean_name}
          </div>
        );
      })}
    </div>
  );
}

export default PokemonList;
