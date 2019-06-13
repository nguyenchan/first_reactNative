import React from "react";
import { ScrollView, ActivityIndicator, StyleSheet } from "react-native";
import UserList from "../user-list";
// import { AUTHORS } from "./author";

class Home extends React.Component {
	state = {
		users: [],
		loading: true
	};
	componentDidMount() {
		// TODO: get users
		this.getUsers();
	}

	async getUsers() {
		const res = await fetch(
			"https://nguyenchan.github.io/fake_api/authors/authors.json"
		);
		console.log(res);
		const { results } = await res.json();
		console.log(results);
		this.setState({ users: [...results], loading: false });
	}

	render() {
		return (
			<ScrollView noSpacer={true} noScroll={true} style={styles.container}>
				{this.state.loading ? (
					<ActivityIndicator
						style={[styles.centering]}
						color="#ff8179"
						size="large"
					/>
				) : (
					<UserList users={this.state.users} />
				)}
			</ScrollView>
		);
	}
}

var styles = StyleSheet.create({
	container: {
		backgroundColor: "whitesmoke"
	},
	centering: {
		alignItems: "center",
		justifyContent: "center",
		padding: 8,
		height: "100vh"
	}
});

export default Home;
