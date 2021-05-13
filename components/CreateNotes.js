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
				<Text style={styles.title}> Notepad </Text>
			</LinearGradient>
			<View style={styles.top}>
			
				<Icon
					style={styles.btn}
					name='save'
					type='font-awesome'
					color='#17C8FF'
					size= '30'
					onPress={saveNote}
				/>
			</View>
			
			
			<TextInput
				value={note}
				onChangeText={setNote}
				style={{ color: "black", fontSize: 20, padding: 10 }}
				multiline={true}
				autoFocus
				maxLength= '610'
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

	topTxt: {
		fontSize: 18,
		fontWeight: 'bold',
		marginVertical: 20
	},

	btn: {
		backgroundColor: 'black',
		marginLeft: 'auto',
		padding: 10,
		borderRadius: 20,
	},

	card: {
		padding: 5,
		width: 40,
		height: 60,
		borderRadius: 10,
		backgroundColor: '#f0932b'
	},

	title: {
		textAlign: "center",
		marginTop: 20,
		fontSize: 40,
		color: 'black',
		fontWeight: 'bold',
		paddingTop: 20,
	
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
})