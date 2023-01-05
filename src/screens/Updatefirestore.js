import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

import { updateDoc, doc } from "firebase/firestore";
import { database } from "../config/firestore";

export default function Updatefirestore({ route, navigation }) {
	const { item } = route.params;
	const id = item.id;
	const [newItem, setNewItem] = useState({
		companyname: item.companyname,
		about: item.about,
		updatedAt: new Date(),
	});

	const onUpdate = async () => {
		try {
			await updateDoc(doc(database, "cruds", id), newItem);
			alert("Update Successful");
		} catch (error) {
			alert("Error Updating Data");
		}
		navigation.navigate("Home", {
			data: item,
		});
	};

	return (
		<View style={styles.container}>
			<View style={styles.innerContainer}>
				<Text style={styles.textHeader}>Update Data</Text>
				<TextInput
					style={styles.textInput}
					multiline={false}
					onChangeText={(text) => setNewItem({ ...newItem, companyname: text })}
					defaultValue={item.companyname}
				></TextInput>
				<TextInput
					style={styles.textInput}
					multiline={true}
					onChangeText={(text) => setNewItem({ ...newItem, about: text })}
					defaultValue={item.about}
				></TextInput>
				<Button title="update" onPress={onUpdate} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#dfedfa",
	},
	innerContainer: {
		padding: 15,
		margin: 15,
		borderRadius: 15,
		alignItems: "center",
		backgroundColor: "#fff",
		elevation: 10,
	},
	textHeader: {
		fontWeight: "bold",
		padding: 20,
	},
	textInput: {
		width: "90%",
		padding: 10,
		marginVertical: 6,
		borderWidth: 1,
		borderRadius: 6,
		borderColor: "red",
	},
});
