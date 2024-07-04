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
  }, []);

  return (
    <div className=" flex flex-wrap min-w-5xl items-start justify-center gap-7">
      {pokemonData.map((pokemon: Pokemon) => {
        return (
          <div
            key={pokemon.id}
            className="bg-white flex items-center justify-center border-solid border-4 border-red-600 mt-5 min-w-64"
          >
            <Link href={`/DetailPage/${pokemon.id}`}>
              <img src={pokemon.sprites.front_default} className="" />
              <div className="border-solid border-2 border-black mb-1">
                <p className="text-center">ID : {pokemon.id}</p>
                <p className="text-center">{pokemon.korean_name}</p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default PokemonList;
