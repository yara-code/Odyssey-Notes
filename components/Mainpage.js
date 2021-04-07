<<<<<<< HEAD
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text,View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default function Mainpage({navigation}) {
  return (
    <View>
        <Text>BIg Titty Yara ( . Y . )</Text>
        <Button title="New Notes" onPress={() => navigation.navigate('Notes')}></Button>
        <Button title="Settings" onPress={() => navigation.navigate('Settings')}></Button>
        
    </View>
  );
=======
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
				navigation.navigate("Notes", {
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
			<Button title="New Notes" onPress={() => navigation.navigate('Notes')}/>
			<Button title="Settings" onPress={() => navigation.navigate('Settings')}/>
		</View>
	)
>>>>>>> dev
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
