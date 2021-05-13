import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native"
import { Button } from "@ui-kitten/components"
import React, { useState } from "react"
import { Pressable } from 'react-native';
import { Dimensions,Text, KeyboardAvoidingView, StyleSheet, TextInput, View } from "react-native"
import { Icon } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler';

import {LinearGradient} from 'expo-linear-gradient'

export default function CreateNote() {
	const [ note, setNote ] = useState("")
	const navigation = useNavigation()

	const saveNote = async () => {
		const value = await AsyncStorage.getItem("NOTES")
		const n = value ? JSON.parse(value) : []
		n.push(note)
		await AsyncStorage.setItem("NOTES", JSON.stringify(n)).then(() => navigation.navigate("Home"))
		setNote("")
	}

	const changeHandler = () => {

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
					<Text style={styles.title}> NotePad </Text>
					<Icon
						style={styles.icon}
						name='save'
						type='font-awesome'
						color='black'
						size= '40'
						onPress={saveNote}
					/>

				</View>
				
			</LinearGradient>
						
			<TextInput
				value={note}
				onChangeText={setNote}
				style={{ color: "black", fontSize: 20, padding: 10 }}
				multiline={true}
				autoFocus
				maxLength= '810'
				selectionColor='#6536FF'
			/>	
			
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#dfe6e9',
		color: "white",
	},
	
	top: {
		flexDirection: 'row',
		justifyContent: 'center',
		paddingTop: 10
		
	},

	nav: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingTop: 40,
		marginLeft: 20,
		marginRight: 20,
	},

	topTxt: {
		fontSize: 18,
		fontWeight: 'bold',
		marginVertical: 20
	},

	icon: {
		marginTop: 5
	},
	
	title: {
		textAlign: "center",
		fontSize: 40,
		color: 'black',
		fontWeight: 'bold',

	},
	
})