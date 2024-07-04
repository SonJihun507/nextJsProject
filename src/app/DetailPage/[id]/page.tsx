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
  console.log(pokemonData);
  return (
    <div className="max-w-lg bg-white flex flex-col items-center justify-center m-0 mx-auto border-solid border-4 border-red-600">
      <img className="my-2.5" src={pokemonData.sprites.front_default} />
      <div className="my-2.5">{pokemonData.korean_name}</div>
      <div className="my-2.5">키 : {pokemonData.height} m</div>
      <div className="my-2.5">몸무게 : {pokemonData.weight} kg</div>
      <div className="flex flex-row my-2.5">
        타입 :
        {pokemonData.types.map((type) => (
          <div key={type.type.name}>&nbsp;&nbsp;{type.type.korean_name}</div>
        ))}
      </div>
      <div className="flex flex-row my-2.5">
        특성 :
        {pokemonData.abilities.map((ability) => (
          <div key={ability.ability.name}>
            &nbsp;&nbsp;{ability.ability.korean_name}
          </div>
        ))}
      </div>
      <h1>기술 :</h1>
      <br />
      <div className="flex flex-row flex-wrap">
        {pokemonData.moves.map((move) => (
          <div key={move.move.name}>&nbsp;&nbsp;{move.move.korean_name}</div>
        ))}
      </div>
      <br />
      <BackSpaceButton></BackSpaceButton>
    </div>
  );
};

export default DetailInfoPage;
