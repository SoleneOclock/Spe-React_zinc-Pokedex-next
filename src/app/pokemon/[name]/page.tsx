import { IPokemon } from '@/@types/pokemon';
import Link from 'next/link';

const getData = async (name: string) => {
  const result = await fetch(`https://api-pokemon-fr.vercel.app/api/v1/pokemon/${name}`);
  const pokemonData = await result.json();
  return pokemonData;
};

interface PokemonPageProps {
  params: {
    name: string;
  }
}

export default async function PokemonPage({ params }: PokemonPageProps) {
  // ici si on veut recuperer la valeur du paramètre dynamique
  // /pokemon/pikachu -> si on veut recuperer pikachu
  // l'équivalent de useParams avec react-router-dom :
  // ici on reçoit direct en props les paramètres dynamiques
  console.log(params);

  // on peut aller chercher les infos du pokemon en fetchant le serveur back depuis le serveur front
  const pokemon = await getData(params.name) as IPokemon;

  return (
    <main className="bg-cyan-950 min-h-screen">
      <h1 className="font-bold text-cyan-400 text-4xl p-12">
        {pokemon.name.fr}
      </h1>

      <Link href="/">← Accueil</Link>

      <img
        src={pokemon.sprites.shiny || pokemon.sprites.regular}
        alt={pokemon.name.fr}
      />
    </main>
  );
}
