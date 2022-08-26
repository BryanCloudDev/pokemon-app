import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Constants from "expo-constants";
import LoginForm from "../components/auth/LoginForm";
import UserData from "../components/auth/UserData";
import useAuth from "../hooks/useAuth";

export default function Account() {
	const { auth } = useAuth();

	return <View style={styles.container}>{auth ? <UserData /> : <LoginForm />}</View>;
}

const styles = StyleSheet.create({
	container: {
		marginTop: Constants.statusBarHeight,
	},
});
