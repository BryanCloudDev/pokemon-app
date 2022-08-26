import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import FavoritesNavigation from "./FavoritesNavigation";
import AccountNavigation from "./AccountNavigation";
import PokedexNavigation from "./PokedexNavigation";
import PokeballImg from "../assets/pokeball.png";

export default function Navigation() {
	const Tab = createBottomTabNavigator();

	return (
		<Tab.Navigator initialRouteName="PokedexNavigation">
			<Tab.Screen
				name="FavoriteNavigation"
				component={FavoritesNavigation}
				options={{
					headerShown: false,
					tabBarLabel: "Favorite",
					tabBarIcon: ({ color, size }) => <Icon name="heart" color={color} size={size} />,
				}}
			/>
			<Tab.Screen
				name="PokedexNavigation"
				component={PokedexNavigation}
				options={{
					headerShown: false,
					tabBarLabel: "",
					tabBarIcon: () => renderPokebar(),
				}}
			/>
			<Tab.Screen
				name="AccountNavigation"
				component={AccountNavigation}
				options={{
					headerShown: false,
					tabBarLabel: "My accout",
					tabBarIcon: ({ color, size }) => <Icon name="user" color={color} size={size} />,
				}}
			/>
		</Tab.Navigator>
	);
}

function renderPokebar() {
	return <Image style={{ width: 75, height: 75, top: -15 }} source={PokeballImg} />;
}
