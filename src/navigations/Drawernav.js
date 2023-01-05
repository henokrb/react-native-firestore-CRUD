import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Bottomtabnav from "./Bottomtabnav";

import About from "../screens/About";
import Contact from "../screens/Contact";

const Drawer = createDrawerNavigator();

export default function Drawernav() {
	return (
		<Drawer.Navigator>
			<Drawer.Screen name="Home" component={Bottomtabnav} />
			<Drawer.Screen name="About Us" component={About} />
			<Drawer.Screen name="Contact Us" component={Contact} />
		</Drawer.Navigator>
	);
}
