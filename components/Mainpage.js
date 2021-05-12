import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect, useNavigation } from "@react-navigation/native"
import { Divider, List, ListItem,FlatList, Text, BottomNavigation } from "@ui-kitten/components"
import React, { useState } from "react"
import { ImageBackground } from 'react-native';
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
	const image= {uri: "https://thumbs.dreamstime.com/b/grid-paper-abstract-striped-background-color-horizontal-lines-geometric-seamless-pattern-school-wallpaper-textures-grid-184815619.jpg" }

	const renderItem = ({ item, index }) => (
		<ListItem
			style={styles.notesItem}
			title={	<ImageBackground source={image} style={styles.image}>
						<Text style={styles.notesTxt} category="h5">{item}</Text>
					</ImageBackground>}
			onPress={() =>
				navigation.navigate("Note", {
					singleNote: item
				})}
		/>
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
			<Text style={styles.title}> Odyssey Notes </Text>
				<View style={styles.btnView}>
					<Icon
						style={styles.btn}
						name='plus-square'
						type='font-awesome'
						color='#5f27cd'
						size= '45'
						onPress={() => navigation.navigate('CreateNotes')}
					/>

					<Icon
						style={styles.btn}
						name='newspaper'
						size= '45'
						type='ionicon'
						color='#5f27cd'
						onPress={newsButtonHandler}
					/>
				</View>
				
			

			<List
				style={styles.notescontainer}
				data={notes}
				// ItemSeparatorComponent={Divider}
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
	},

	item: {
		marginVertical: 4
	},

	notesItem: {
		width: 170,
		height: 270,
		margin: 10,
		borderRadius: 15,
		borderColor: '#5f27cd',
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

	image: {
		borderRadius: 100,
		width: 130,
		height: 230,
		resizeMode: 'cover',
		justifyContent: 'center',
	},

	title: {
		textAlign: "center",
		marginTop: 20,
		fontSize: 40,
		color: '#5f27cd',
		fontWeight: 'bold',
	
	},

	notes: {
		fontSize: 24
	}
})
