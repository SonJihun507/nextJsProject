"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Pokemon from "./Type";

function PokemonList() {
  const [pokemonData, setPokemonData] = React.useState<Pokemon[]>([]);
  const router = useRouter();

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
            <Link href={`/DetailPage/${pokemon.id}`}>
              <img src={pokemon.sprites.front_default} />
              {pokemon.korean_name}
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default PokemonList;
