// interface de l'objet pokemon
// généré automatiquement à partir du JSON reçu par l'API
// https://transform.tools/json-to-typescript

export interface Name {
  fr: string
  en: string
  jp: string
}

export interface Sprites {
  regular: string
  shiny: string
  gmax: any
}

export interface Type {
  name: string
  image: string
}

export interface Talent {
  name: string
  tc: boolean
}

export interface Stats {
  hp: number
  atk: number
  def: number
  spe_atk: number
  spe_def: number
  vit: number
}

export interface Resistance {
  name: string
  multiplier: number
}

export interface Next {
  pokedexId: number
  name: string
  condition: string
}

export interface Sexe {
  male: number
  female: number
}

export interface Evolution {
  pre: any
  next: Next[]
  mega: any
}

export interface IPokemon {
  pokedexId: number
  generation: number
  category: string
  name: Name
  sprites: Sprites
  types: Type[]
  talents: Talent[]
  stats: Stats
  resistances: Resistance[]
  evolution: Evolution
  height: string
  weight: string
  egg_groups: string[]
  sexe: Sexe
  catch_rate: number
  level_100: number
  forme: any
}
