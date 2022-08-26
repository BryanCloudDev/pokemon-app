import { FlatList, StyleSheet, ActivityIndicator, Platform } from "react-native";
import React from "react";
import PokemonCard from "./PokemonCard";

export default function PokemonList(props) {
	const { pokemons, loadPokemons, nextUrl } = props;

	const loadMore = () => {
		loadPokemons();
		console.log();
	};

	return (
		<FlatList
			data={pokemons}
			numColumns={2}
			showsVerticalScrollIndicator={false}
			keyExtractor={(pokemon) => String(pokemon.id)}
			renderItem={({ item }) => <PokemonCard pokemon={item} />}
			contentContainerStyle={styles.container}
			onEndReached={nextUrl && loadMore}
			onEndReachedThreshold={0.1}
			ListFooterComponent={
				nextUrl && <ActivityIndicator size="large" style={styles.spinner} color="#aeaeae" />
			}
		/>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 5,
	},
	spinner: {
		marginTop: 20,
		marginBottom: Platform.OS == "android" ? 60 : 30,
	},
});
