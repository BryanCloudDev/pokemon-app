import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

export default function NotLogged() {
	const navigation = useNavigation();

	const goToLogin = () => {
		navigation.navigate("AccountNavigation");
	};

	return (
		<View style={styles.content}>
			<Text style={styles.text}>IN order to access your favorite Pokimones, please login.</Text>
			<Button title="Go to login page" onPress={goToLogin} />
		</View>
	);
}

const styles = StyleSheet.create({
	content: {
		marginVertical: 50,
		paddingHorizontal: 50,
	},
	text: {
		textAlign: "center",
		marginBottom: 10,
	},
});
