import { View, Text, StyleSheet, Image } from "react-native";
import { capitalize } from "lodash";
import { getColorByPokemonType } from "../../utils/getColorByPokemonType";
import React from "react";

export default function Header({ name, order, image, type }) {
	const bgStyles = { backgroundColor: getColorByPokemonType(type), ...styles.bgStyles };

	return (
		<>
			<View style={bgStyles} />
			<View style={styles.content}>
				<View style={styles.header}>
					<Text style={styles.name}>{capitalize(name)}</Text>
					<Text style={styles.order}># {`${order}`.padStart(3, 0)}</Text>
				</View>
				<View style={styles.contentImg}>
					<Image source={{ uri: image }} style={styles.image} />
				</View>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	bgStyles: {
		width: "100%",
		height: 400,
		borderBottomEndRadius: 300,
		borderBottomLeftRadius: 300,
		transform: [{ scaleX: 2 }],
	},
	content: {
		marginHorizontal: 1,
		marginVertical: 30,
		position: "absolute",
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	header: {
		flexDirection: "row",
		width: "100%",
		justifyContent: "space-between",
		alignItems: "center",
		paddingTop: 40,
	},
	name: {
		color: "#fff",
		fontWeight: "bold",
		fontSize: 27,
		paddingLeft: 20,
	},
	order: {
		color: "#fff",
		fontWeight: "bold",
		paddingRight: 20,
	},
	contentImg: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		top: 30,
	},
	image: {
		width: 250,
		height: 250,
	},
});
