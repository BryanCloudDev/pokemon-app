import React, { useState, useEffect } from "react";
import Constants from "expo-constants";
import { View, Platform, StyleSheet } from "react-native";
import { getPokemonApi, getPokemonDetailsByUrlApi } from "../api/pokemon";
import PokemonList from "../components/PokemonList";

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState();

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonApi(nextUrl);
      setNextUrl(response.next);

      const pokemonsArray = [];

      for await (const pokemon of response.results) {
        const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);

        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image: pokemonDetails.sprites.other["official-artwork"].front_default,
        });
      }

      setPokemons([...pokemons, ...pokemonsArray]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <PokemonList
        pokemons={pokemons}
        loadPokemons={loadPokemons}
        nextUrl={nextUrl}
      />
    </View>
  );
}

// renderizado condicional dependiendo de la plataforma
const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS == "android" ? Constants.statusBarHeight : 0,
  },
});
