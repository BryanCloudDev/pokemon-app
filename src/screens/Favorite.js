import { View, Text, StyleSheet, Button } from "react-native";
import React, { useState, useCallback } from "react";
import Constants from "expo-constants";
import { useFocusEffect } from "@react-navigation/native";
import useAuth from "../hooks/useAuth";
import { getPokemonDetailsApi } from "../api/pokemon";
import { getPokemonsFavoriteApi } from "../api/favorite";
import PokemonList from "../components/PokemonList";
import NotLogged from "../components/NotLogged";

export default function Favorite() {
	const checkFavorites = async () => {
		const response = await getPokemonsFavoriteApi();
		console.log(response);
	};

	const [pokemons, setPokemons] = useState([]);
	console.log(pokemons);

	const { auth } = useAuth();

	useFocusEffect(
		useCallback(() => {
			if (auth) {
				(async () => {
					const response = await getPokemonsFavoriteApi();

					const pokemonsArray = [];

					for await (const id of response) {
						const pokemonDetails = await getPokemonDetailsApi(id);

						pokemonsArray.push({
							id: pokemonDetails.id,
							name: pokemonDetails.name,
							type: pokemonDetails.types[0].type.name,
							order: pokemonDetails.order,
							image: pokemonDetails.sprites.other["official-artwork"].front_default,
						});
					}
					setPokemons(pokemonsArray);
				})();
			}
		}, [auth])
	);

	return auth ? <PokemonList pokemons={pokemons} /> : <NotLogged />;
}

const styles = StyleSheet.create({
	container: {
		// marginTop: Constants.statusBarHeight,
	},
});
