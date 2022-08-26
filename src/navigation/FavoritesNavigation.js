import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FavoriteScreen from "../screens/Favorite";
import PokemonScreen from "../screens/Pokemon";

export default function FavoritesNavigation() {
	const Stack = createNativeStackNavigator();

	return (
		<Stack.Navigator>
			<Stack.Screen name="Favorite" component={FavoriteScreen} options={{ headerShown: false }} />
			<Stack.Screen
				name="Pokemon"
				component={PokemonScreen}
				options={{ headerShown: true, headerTransparent: true, title: "" }}
			/>
		</Stack.Navigator>
	);
}
