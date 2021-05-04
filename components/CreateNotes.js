import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native"
import { Button } from "@ui-kitten/components"
import React, { useState } from "react"
import { Pressable } from 'react-native';
import { Dimensions,Text, KeyboardAvoidingView, StyleSheet, TextInput, View } from "react-native"
import { Icon } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler';

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

			<View style={styles.top}>

				<Icon
					style={styles.btn}
					name='save'
					type='font-awesome'
					color='#ff9f1a'
					size= '35'
					onPress={saveNote}
				/>
			</View>
			
			
			<TextInput
				value={note}
				onChangeText={setNote}
				style={{ color: "black", fontSize: 20 }}
				multiline={true}
				autoFocus
				maxLength= '610'
				selectionColor='#ff9f1a'
			/>	
			
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#c8d6e5',
		color: "white",
		padding: 10,
		paddingTop: 10,
	},
	
	top: {
		flexDirection: 'row',
		justifyContent: 'space-evenly'
	},

	topTxt: {
		fontSize: 18,
		fontWeight: 'bold',
		marginVertical: 20
	},

	btn: {
		backgroundColor: '#222f3e',
		marginLeft: 'auto',
		padding: 10,
		borderRadius: 100,
	},

	card: {
		padding: 5,
		width: 40,
		height: 60,
		borderRadius: 10,
		backgroundColor: '#f0932b'
	}
})