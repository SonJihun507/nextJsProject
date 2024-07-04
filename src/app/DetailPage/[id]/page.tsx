import BackSpaceButton from "@/components/BackSpaceButton";
import Pokemon from "@/components/Type";
import React from "react";

const fetchPokemonData = async (id: string) => {
  const apiUrl = "http://localhost:3000";
  const respose = await fetch(`${apiUrl}/api/pokemons/${id}`);
  return respose.json();
};

const DetailInfoPage = async ({ params }: { params: { id: string } }) => {
  const pokemonData: Pokemon = await fetchPokemonData(params.id);

  return (
    <div>
      <img src={pokemonData.sprites.front_default} />
      <div>{pokemonData.korean_name}</div>
      <div>키 : {pokemonData.height} m</div>
      <div>몸무게 : {pokemonData.weight} kg</div>
      <div>
        타입:
        {pokemonData.types.map((type) => (
          <div key={type.type.name}>{type.type.korean_name}</div>
        ))}
      </div>
      <div>
        특성 :
        {pokemonData.abilities.map((ability) => (
          <div key={ability.ability.name}>{ability.ability.korean_name}</div>
        ))}
      </div>
      <div>
        기술 :
        {pokemonData.moves.map((move) => (
          <div key={move.move.name}>{move.move.korean_name}</div>
        ))}
      </div>
      <BackSpaceButton></BackSpaceButton>
    </div>
  );
};

export default DetailInfoPage;
