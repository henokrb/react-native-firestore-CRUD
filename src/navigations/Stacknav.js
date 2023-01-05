import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Drawernav from "./Drawernav";

import Addfirestore from "../screens/Addfirestore";
import Listfirestore from "../screens/Listfirestore";
import Detailsfirestore from "../screens/Detailsfirestore";
import Updatefirestore from "../screens/Updatefirestore";

const Stack = createNativeStackNavigator();

export default function Stacknav() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Home"
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name="Drawer" component={Drawernav} />
				<Stack.Screen
					name="Addfirestore"
					component={Addfirestore}
					options={{
						headerShown: true,
						headerTitle: "Add Data",
					}}
				/>
				<Stack.Screen
					name="Listfirestore"
					component={Listfirestore}
					options={{
						headerShown: true,
						headerTitle: "List Data",
					}}
				/>
				<Stack.Screen
					name="Detailsfirestore"
					component={Detailsfirestore}
					options={{
						headerShown: true,
						headerTitle: "Details",
					}}
				/>

				<Stack.Screen
					name="Updatefirestore"
					component={Updatefirestore}
					options={{
						headerShown: true,
						headerTitle: "Update Data",
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
