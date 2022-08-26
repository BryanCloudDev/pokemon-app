import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Keyboard } from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";
import { userData, userDetails } from "../../utils/userDB";
import useAuth from "../../hooks/useAuth";

export default function LoginForm() {
	const [error, setError] = useState("");

	const { login, user } = useAuth();
	const formik = useFormik({
		initialValues: initialValues,
		validationSchema: Yup.object(validationSchema),
		validateOnChange: false,
		onSubmit: (formValue) => {
			setError("");
			const { username, password } = formValue;
			if (username !== userData.username || password !== userData.password) {
				setError("Informacion incorrecta");
			} else {
				login(userDetails);
			}
		},
	});

	return (
		<View>
			<Text style={styles.title}>Login</Text>
			<TextInput
				placeholder="Username"
				style={styles.input}
				autoCapitalize="none"
				value={formik.values.username}
				onChangeText={(text) => formik.setFieldValue("username", text)}
			/>
			<TextInput
				placeholder="Password"
				style={styles.input}
				autoCapitalize="none"
				secureTextEntry={true}
				value={formik.values.password}
				onChangeText={(text) => formik.setFieldValue("password", text)}
			/>
			<Button title="Login" onPress={formik.handleSubmit} />
			<Text style={styles.error}>{formik.errors.username}</Text>
			<Text style={styles.error}>{formik.errors.password}</Text>
			<Text style={styles.error}>{error}</Text>
		</View>
	);
}

const initialValues = {
	username: "",
	password: "",
};

const validationSchema = {
	username: Yup.string().required("EL usuario es obligatorio"),
	password: Yup.string().required("Contra es obligatoria"),
};

const styles = StyleSheet.create({
	title: {
		textAlign: "center",
		fontWeight: "bold",
		fontSize: 28,
		marginTop: 50,
		marginBottom: 15,
	},
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
		borderRadius: 10,
	},
	error: {
		textAlign: "center",
		color: "#ff0000",
		marginTop: 20,
	},
});
