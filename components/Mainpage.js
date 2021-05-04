import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect, useNavigation } from "@react-navigation/native"
import { Divider, List, ListItem,FlatList, Text, BottomNavigation } from "@ui-kitten/components"
import React, { useState } from "react"
import { Pressable } from 'react-native';
import { StyleSheet, View, Button } from "react-native"
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements'
export default function Mainpage() {
	const [ notes, setNotes ] = useState([])
	const navigation = useNavigation();

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
			style={styles.notesItem}
			title={<Text style={styles.notesTxt} category="h5">{item}</Text>}
			onPress={() =>
				navigation.navigate("Note", {
					singleNote: item
				})}
		/>
	)


	return (
		<View style={styles.mainView }>
			<Text style={styles.title}> My Notes </Text>
				<View style={styles.btnView}>
					<Icon
						style={styles.btn}
						name='plus-square'
						type='font-awesome'
						color='#ff9f1a'
						size= '45'
						onPress={() => navigation.navigate('CreateNotes')}
					/>

					<Icon
						style={styles.btn}
						name='cog'
						size= '45'
						type='font-awesome'
						color='#ff9f1a'
						onPress={() => navigation.navigate('Settings')}
					/>
				</View>
				
			

			<List
				style={styles.container}
				data={notes.reverse()}
				ItemSeparatorComponent={Divider}
				renderItem={renderItem}
				numColumns='2'
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	mainView: {
		backgroundColor: "#222f3e", 
		flex: 1
	},

	notescontainer: {
		backgroundColor: '#222f3e',
	},

	item: {
		marginVertical: 4
	},

	notesItem: {
		width: 150,
		height: 250,
		margin: 10,
		borderRadius: 15,
		borderColor: '#ff9f1a',
		borderWidth: 3,
		backgroundColor: '#c8d6e5',
		marginRight: 'auto',
		marginLeft: 'auto'
	},

	notesTxt: {
		fontSize: 12,
		color: 'black',
	},

	btnView: {
		flexDirection: 'row',
		margin: 5,
		padding: 10,
		justifyContent: 'space-evenly'

	},

	btn: {
		margin: 5,
	},

	btnTxt: {
		textAlign: 'center'
	},

	title: {
		textAlign: "center",
		marginTop: 20,
		fontSize: 50,
		color: '#ff9f1a',
		fontWeight: 'bold',
	
	},

	notes: {
		fontSize: 24
	}
})
