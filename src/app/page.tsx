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

import Link from 'next/link';
import { IPokemon } from '@/@types/pokemon';
import Counter from '@/components/Counter';
import PokemonCard from '@/components/PokemonCard';

const getData = async () => {
  // si je suis en dev :
  let apiURL: string | undefined = '';
  if (process.env.NODE_ENV === 'development') {
    // on recupere l'adresse depuis le fichier .env.local
    // le contenu de ce fichier n'est pas partagé : son contenu est secret !!
    apiURL = process.env.NEXT_PUBLIC_API_URL;
  } else {
    // si je suis en prod : (ici c'est le mm adresse mais dans la vraie vie elle serait différente)
    apiURL = process.env.NEXT_PUBLIC_API_URL;
  }
  if (!apiURL) {
    apiURL = '';
  }

  const response = await fetch(apiURL);
  const pokemonList = await response.json();
  // dans le tableau pokemonList on a nos objets pokemon

  return pokemonList;
};

// grace à next on peut avoir des composants qui sont des fonction asynchrones
// on va pouvoir attendre le fetch des données avant de faire le rendu du composant
export default async function Home() {
  // recuperer une liste de pokemon d'une API
  // dans le JSX pour chaque pokemon de la list on va afficher un sous composant PokemonCard
  console.log(process.env.NODE_ENV);

  const pokemonList = await getData() as IPokemon[];

  return (
    <main>
      <div className="bg-cyan-900 min-h-screen">
        <h1 className="text-cyan-400 text-4xl font-bold p-4">
          Pokedex de Soso
        </h1>
        <Counter />

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-2 p-2">
          {
            pokemonList.map((pokemon) => (
              <Link
                key={pokemon.pokedexId}
                href={`/pokemon/${pokemon.name.fr.toLowerCase()}`}
              >
                <PokemonCard pokemon={pokemon} />
              </Link>
            ))
          }
        </div>

      </div>
    </main>
  );
}
