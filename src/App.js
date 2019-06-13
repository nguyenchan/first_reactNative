import React from "react";
import { AppRegistry, StyleSheet, View } from "react-native";
import Home from "./components/home";
import Header from "./components/header";

class App extends React.Component {
	render() {
		return (
			<View style={styles.appContainer}>
				<Header title="Archeryvn authors" />
				<Home />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1
	}
});

AppRegistry.registerComponent("App", () => App);

export default App;
