export interface PokemonTipo {
  slot: number;
  type: {
    name: string;
    url:   string;
  };
}

export interface Pokemon {
  id: number;
  name: string;
  weight: number;
  height: number;
  base_experience: number;
  types: PokemonTipo[];
  sprites: {
    front_default: string;
  };
}