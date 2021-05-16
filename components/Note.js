import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect, useNavigation } from "@react-navigation/native"
import { Button, Text } from "@ui-kitten/components"
import React, { useState } from "react"
import { StyleSheet, View } from "react-native"
import {LinearGradient} from 'expo-linear-gradient'
import { ImageBackground } from 'react-native';

import { colors, Icon } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Note({ route }) {
	const [ notes, setNotes ] = useState([])
	const [newsDetails, setNewsDetails] = useState([])

	const { singleNote } = route.params
	const navigation = useNavigation()

	useFocusEffect(
		React.useCallback(() => {
			getNotes()
			getNewsNotes()
		}, [])
	)

	const getNotes = () => {
		AsyncStorage.getItem("NOTES").then((notes) => {
			setNotes(JSON.parse(notes))
		})
	}

	const getNewsNotes = () => {
		AsyncStorage.getItem("NEWSNOTES").then((newsDetails) => {
			setNewsDetails(JSON.parse(newsDetails))
		})
	}

	const deleteNote = async () => {
		const newNotes = await notes.filter((note) => note !== singleNote)
		await AsyncStorage.setItem("NOTES", JSON.stringify(newNotes)).then(() => navigation.navigate("Home"))

		const newsNotes = await newsDetails.filter((note) => note !== singleNote)
		await AsyncStorage.setItem("NEWSNOTES", JSON.stringify(newsNotes)).then(() => navigation.navigate("Home"))
	}

	return (
		<View style={styles.container}>
			<LinearGradient
			colors={['#00FFFF', '#17C8FF', '#329BFF', '#4C64FF', '#6536FF', '#8000FF']}
			start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
			
			>
				<View style={styles.nav}>
                    <Icon
						style={styles.icon}
						name='arrow-left'
						type='font-awesome'
						color='black'
						size= '30'
						onPress={() => navigation.navigate('Home')}
					/>
					<Text style={styles.title}> Note </Text>
					

				</View>
			</LinearGradient>

				
				<View style={styles.noteContainer}>
					<Text style={styles.noteTxt}>{singleNote}</Text>
					<LinearGradient
						colors={['#00FFFF', '#17C8FF', '#329BFF', '#4C64FF', '#6536FF', '#8000FF']}
						start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
						style={styles.buttongrad}
					>
						<TouchableOpacity onPress={deleteNote}>
							<Text style={styles.buttonTxt}>Delete</Text>
						</TouchableOpacity>
					</LinearGradient>
					{/* <LinearGradient
						colors={['#00FFFF', '#17C8FF', '#329BFF', '#4C64FF', '#6536FF', '#8000FF']}
						start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
						style={styles.buttongrad}
					>
						<TouchableOpacity onPress={deleteNewsNote}>
							<Text style={styles.buttonTxt}>DeleteNewsNote</Text>
						</TouchableOpacity>
					</LinearGradient> */}
				</View>
			
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,

		backgroundColor: '#bdc3c7'
	},
	noteContainer: {
		margin: 10,
		flex: 1,
		backgroundColor: '#bdc3c7'
	},
	item: {
		marginVertical: 4
	},
	title: {
		textAlign: "center",
		marginTop: 50
	},
	noteTxt: {
		fontSize: 18,
		color: 'black'
	},

	bg: {
		width: 400,
		height: 805,

	},
	nav: {
		flexDirection: 'row',
		textAlign: 'center',
		paddingTop: 40,
        alignContent: 'space-between'
	},
	title: {
		fontSize: 40,
		color: 'black',
		fontWeight: 'bold',
        marginLeft: 118,
        // marginRight: 'auto',
	},
	icon: {
		marginTop: 5,
        marginLeft: 10
	},
	
	buttongrad: {
		width: 120,
		height: 60,
		borderRadius: 10,
		borderWidth: 2,
		justifyContent: 'center',
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: 'auto'
	},

	buttonTxt: {
		color: 'black',
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 26,

	}
})