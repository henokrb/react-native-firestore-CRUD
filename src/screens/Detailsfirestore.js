import { View, Text, StyleSheet, Button, Pressable } from "react-native";

import { doc, deleteDoc } from "firebase/firestore";
import { database } from "../config/firestore";
import { MaterialIcons } from "@expo/vector-icons";

export default function Detailsfirestore({ route, navigation }) {
	const { data } = route.params;

	const onDelete = () => {
		const docRef = doc(database, "cruds", data.id);
		deleteDoc(docRef);
		navigation.goBack();
	};

	return (
		<View style={styles.container}>
			<View style={styles.innerContainer}>
				<Text style={styles.companyname}>{data.companyname}</Text>
				<Text>{data.about}</Text>
				<View style={styles.icons}>
					<Pressable
						onPress={() =>
							navigation.navigate("Updatefirestore", {
								item: data,
							})
						}
					>
						<MaterialIcons name="edit" size={24} color="#0000FF" />
					</Pressable>
					<Pressable onPress={onDelete}>
						<MaterialIcons name="delete" size={24} color="#FF6768" />
					</Pressable>
				</View>
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
		margin: 15,
		padding: 15,
		borderRadius: 15,
		alignItems: "center",
		backgroundColor: "#fff",
		elevation: 10,
	},
	companyname: {
		fontWeight: "bold",
		paddingBottom: 15,
	},
	about: {
		fontWeight: "300",
	},
	icons: {
		flexDirection: "row",
		paddingTop: 20,
		alignSelf: "flex-end",
	},
});
