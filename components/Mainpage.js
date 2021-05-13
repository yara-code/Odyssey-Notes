import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect, useNavigation } from "@react-navigation/native"
import { Divider, List, ListItem,FlatList, Text, BottomNavigation } from "@ui-kitten/components"
import React, { useState } from "react"
import { ImageBackground } from 'react-native';
import { StyleSheet, View, Button } from "react-native"
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements'

import {LinearGradient} from 'expo-linear-gradient'

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
	const image= {uri: "https://thumbs.dreamstime.com/b/grid-paper-abstract-striped-background-color-horizontal-lines-geometric-seamless-pattern-school-wallpaper-textures-grid-184815619.jpg" }

	const renderItem = ({ item, index }) => (
		<LinearGradient
			colors={['#00FFFF', '#17C8FF', '#329BFF', '#4C64FF', '#6536FF', '#8000FF']}
			start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
			style={styles.notesItem}
		>

			<TouchableOpacity onPress={() =>
				navigation.navigate("Note", {
				singleNote: item
			})}>
				<ImageBackground source={image} style={styles.image} >
					<Text style={styles.notesTxt} category="h5">{item}</Text>
				</ImageBackground>
			</TouchableOpacity>
		</LinearGradient>
	)

	async function newsButtonHandler() {
        let res = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=f5037afaa4c647dfa836977a061e09e8')
        const data = await res.json()
		
		const newsfeed = data.articles
		// console.log(newsfeed)
		navigation.navigate('News', {newsfeed})
		
    }

	return (
		<View style={styles.mainView }>
			
			<LinearGradient
			colors={['#00FFFF', '#17C8FF', '#329BFF', '#4C64FF', '#6536FF', '#8000FF']}
			start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
			
			>
				<Text style={styles.title}> Odyssey Notes </Text>
			</LinearGradient>
			
				<View style={styles.btnView}>
					<Text style={styles.headerText}> New Notes: </Text>
					<Icon
						style={styles.btn}
						name='plus-square'
						type='font-awesome'
						color='#5f27cd'
						size= '45'
						onPress={() => navigation.navigate('CreateNotes')}
					/>

					<Text style={styles.headerText}> News: </Text>
					<Icon
						style={styles.btn}
						name='newspaper'
						size= '45'
						type='ionicon'
						color='#5f27cd'
						onPress={newsButtonHandler}
					/>
						<Icon
						style={styles.btn}
						name='cloud'
						type='font-awesome'
						color='#5f27cd'
						size= '45'
						onPress={() => navigation.navigate('Weather')}
					/>
				</View>
				

			<List
				style={styles.notescontainer}
				data={notes}
				renderItem={renderItem}
				numColumns='2'
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	mainView: {
		backgroundColor: "black", 
		flex: 1
	},

	notescontainer: {
		backgroundColor: 'black',
		marginRight: 'auto',
		marginLeft: 'auto'
	},

	item: {
		marginVertical: 4
	},

	headerText: {
		fontSize: 24,
		marginVertical: 8,
		borderRadius: 15,
		borderWidth: 1,
		borderBottomColor: 'red',
		borderColor: '#5f27cd',
		padding: 5
	},

	notesItem: {
		margin: 10,
		borderRadius: 15,
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

	image: {
		width: 140,
		height: 200,
		margin: 10,
		padding: 5
	},

	title: {
		textAlign: "center",
		marginTop: 20,
		fontSize: 40,
		color: 'black',
		fontWeight: 'bold',
		paddingTop: 20,
	
	},

	notes: {
		fontSize: 24
	}
})
