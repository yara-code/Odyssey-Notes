import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect, useNavigation } from "@react-navigation/native"
import { Divider, List, ListItem, Text, BottomNavigation } from "@ui-kitten/components"
import React, { useState } from "react"
import { StyleSheet, View, Button } from "react-native"

export default function Mainpage() {
	const [ notes, setNotes ] = useState([])
	const navigation = useNavigation()

	useFocusEffect(
		React.useCallback(() => {
			getNotes()
		}, [])
	)

	const getNotes = () => {
		AsyncStorage.getItem("NOTES").then((notes) => {
			setNotes(JSON.parse(notes))
		})
	}

	const renderItem = ({ item, index }) => (
		<ListItem
			title={<Text category="h5">{item}</Text>}
			onPress={() =>
				navigation.navigate("Note", {
					singleNote: item
				})}
		/>
	)

	return (
		<View style={{ backgroundColor: "#222B45", flex: 1 }}>
			<Text style={styles.title} category="h1">
				Notes
			</Text>
			<List
				style={styles.container}
				data={notes}
				ItemSeparatorComponent={Divider}
				renderItem={renderItem}
			/>
			<Button title="New Notes" onPress={() => navigation.navigate('CreateNotes')}/>
			<Button title="Settings" onPress={() => navigation.navigate('Settings')}/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		fontSize: 20
	},

	item: {
		marginVertical: 4
	},
	title: {
		textAlign: "center",
		marginTop: 50
	},
	notes: {
		fontSize: 24
	}
})
