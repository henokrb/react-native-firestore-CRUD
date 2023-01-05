import React, { useEffect, useState } from "react";
import {
	View,
	Text,
	FlatList,
	StyleSheet,
	Pressable,
	Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { database } from "../config/firestore";

export default function Listfirestore() {
	const navigation = useNavigation();
	const [cruds, setCruds] = useState([]);

	// Using Firestire
	useEffect(() => {
		const dbRef = collection(database, "cruds");

		const q = query(dbRef, orderBy("companyname", "asc"));

		const unsubscribe = onSnapshot(q, (querySnapshot) => {
			setCruds(
				querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
			);
		});

		return unsubscribe;
	}, []);

	return (
		<View style={styles.container}>
			<View>
				<Button
					title="Add Data"
					onPress={() => navigation.navigate("Addfirestore")}
				/>
				<Text style={styles.textTitle}>Lists</Text>
				<FlatList
					style={{ height: "100%" }}
					data={cruds}
					numColumns={1}
					renderItem={({ item }) => (
						<Pressable
							onPress={() =>
								navigation.navigate("Detailsfirestore", {
									data: item,
								})
							}
							style={({ pressed }) => [
								styles.button,
								{
									backgroundColor: pressed ? "#dfedfa" : "#fff",
									opacity: pressed ? 0.5 : 1,
									margin: 10,
									padding: 15,
									borderRadius: 12,
									alignItems: "center",
									elevation: 5,
								},
							]}
						>
							<View style={styles.innerContainer}>
								<Text style={styles.textHeader}>{item.companyname}</Text>
								<Text style={styles.about}>{item.about}</Text>
							</View>
						</Pressable>
					)}
					keyExtractor={(item) => item.id}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#dfedfa",
		//padding: 10,
	},
	innerContainer: {
		flexDirection: "column",
		alignItems: "center",
	},
	textTitle: {
		marginLeft: 190,
		marginTop: 20,
		fontWeight: "bold",
		fontSize: 20,
	},
	textHeader: {
		fontWeight: "bold",
	},
	about: {
		fontWeight: "300",
	},
});
