// de base TOUS les composants avec next sont rendus coté serveur
// on ne voit pas les composants coté navigateur
// le render se fait coté serveur donc attention ne console.log se voyent coté serveur
// (et non pas dans la console du navigateur)

// si on a besoin de useState, de useEffect, de gestion d'event (onClick)
// on doit revenir dans un compposant rendu coté client
// en specifiant 'use client'; tout en haut
// tous les composants enfant seront alors aussi rendu coté client !
// c'est un peu dommage de mettre un useclient sur la page sinon y'a plus de ssr
// donc on va plutot faire des sous composants client et garder nos pages en server

import { IPokemon } from '@/@types/pokemon';
import Counter from '@/components/Counter';
import PokemonCard from '@/components/PokemonCard';

const getData = async () => {
  const response = await fetch('https://api-pokemon-fr.vercel.app/api/v1/gen/9');
  const pokemonList = await response.json();
  console.log(pokemonList);
  // dans le tableau pokemonList on a nos objets pokemon

  return pokemonList;
};

// grace à next on peut avoir des composants qui sont des fonction asynchrones
// on va pouvoir attendre le fetch des données avant de faire le rendu du composant
export default async function Home() {
  // recuperer une liste de pokemon d'une API
  // dans le JSX pour chaque pokemon de la list on va afficher un sous composant PokemonCard
  console.log('rendu du composant Home !!! ');

  const pokemonList = await getData() as IPokemon[];

  return (
    <main>
      <div className="bg-cyan-900 min-h-screen">
        <h1 className="text-cyan-400 text-4xl font-bold p-4">
          Pokedex
        </h1>
        <Counter />

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-2 p-2">
          {
            pokemonList.map((pokemon) => (
              <PokemonCard key={pokemon.pokedexId} pokemon={pokemon} />
            ))
          }
        </div>

      </div>
    </main>
  );
}
