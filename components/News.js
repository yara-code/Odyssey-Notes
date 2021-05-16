import React, { useState, useEffect } from 'react'
import {View, StyleSheet, Text, Pressable, FlatList,Dimensions, Image, Modal, Linking} from 'react-native'
const {width,height} = Dimensions.get('window')
import { colors, Icon } from 'react-native-elements'
import {LinearGradient} from 'expo-linear-gradient'
import { TouchableOpacity } from 'react-native-gesture-handler'


const News = (props) => {

    let resultPacket = props.route.params.newsfeed
    let resultsArray = resultPacket;
    // console.log(resultsArray)

    const [modalVisible, setModalVisible] = useState(false)

    const [newsDetails, setNewsDetails] = useState([{'author':null,"content": null,"description": null,}])

    const Item = ({data}) => (
        <View> 
            <TouchableOpacity
                // style={[styles.button, styles.buttonOpen]}
                // onPress={() => setModalVisible(true)}
                onPress={ async function articleClickHandler() {
                    let url = 'https://newsapi.org/v2/top-headlines?country=us&'
                    let article = 'q=' + data.title;
                    let key = '&apiKey=f5037afaa4c647dfa836977a061e09e8'
            
                    const res = await fetch(url+article+key)
            
                    const resdata = await res.json()
                    
                    setNewsDetails(resdata.articles)
                    setModalVisible(true)
                }}
            >

            <View style={styles.container}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Image style={styles.posterMoreInfo} source={{uri: newsDetails[0].urlToImage}}/>

                        <Text style={styles.moreInfoTitle}>{newsDetails[0].title}</Text>
                        <Text style={styles.moreInfoContent}>{newsDetails[0].content}</Text>
        
                        <Text style={styles.moreInfotxt}>Author: {newsDetails[0].author}</Text>
                        <Text style={styles.moreInfotxt}>Published: {newsDetails[0].publishedAt}</Text>
                        
                         <View style={styles.moreInfoButtonContainer}> 
                             
                            <LinearGradient
                                colors={['#00FFFF', '#17C8FF', '#329BFF', '#4C64FF', '#6536FF', '#8000FF']}
                                start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                                style={styles.buttongrad}
					        >
                                <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                                    <Text style={styles.buttonTxt}>Close</Text>
                                </TouchableOpacity>
					        </LinearGradient>

                            <LinearGradient
                                colors={['#00FFFF', '#17C8FF', '#329BFF', '#4C64FF', '#6536FF', '#8000FF']}
                                start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                                style={styles.buttongrad}
					        >
                                <TouchableOpacity>
                                    <Text style={styles.buttonTxt}>Save</Text>
                                </TouchableOpacity>
					        </LinearGradient>

                            <LinearGradient
                                colors={['#00FFFF', '#17C8FF', '#329BFF', '#4C64FF', '#6536FF', '#8000FF']}
                                start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                                style={styles.buttongrad}
					        >
                                <TouchableOpacity onPress={ ()=>{ Linking.openURL(newsDetails[0].url)}}>
                                    <Text style={styles.buttonTxt}>Full Article</Text>
                                </TouchableOpacity>
					        </LinearGradient>
                        
                        </View>
                        

                    </View>
                    </View>
                </Modal> 
                
                <Image style={styles.poster} source={{uri: data.urlToImage}}/>
                <Text style={styles.newsTitle}>{data.title}</Text>
            
            </View>
        </TouchableOpacity>
        </View>
        
    )

    const renderList = ({item}) => <Item data={item} />;

    return (
        <View style={styles.mc}>
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
						onPress={() => props.navigation.navigate('Home')}
					/>
					<Text style={styles.title}> World News </Text>
					

				</View>
				
			</LinearGradient>

                <View style={styles.safeareaview}>
                    <FlatList
                        data={resultsArray}
                        renderItem={renderList}
                        horizontal={false}
                        numColumns= '2'
                        keyExtractor={(item) => item.url}
                    />
                </View>

             
        </View>
        
    )
}

export default News;

const styles = StyleSheet.create({
    mc: {
        backgroundColor: 'black',
    },

    safeareaview: {
        backgroundColor: 'black',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    container: {
        alignContent: 'center',
        margin: 20,
        width:150,
        height:200,
        backgroundColor: '#74b9ff',
        borderColor: '#6c5ce7',
        borderStyle: 'solid',
        borderWidth:3,
        borderRadius: 20,
        padding: 5
    },
    poster: {
        width: 120,
        height: 80,
        marginLeft: 'auto',
        marginRight: 'auto',
        margin: 10
    },
    nav: {
		flexDirection: 'row',
		textAlign: 'center',
		paddingTop: 40,
        // marginLeft: 'auto',
        // marginRight: 'auto',
        alignContent: 'space-between'
	},
    title: {
		fontSize: 40,
		color: 'black',
		fontWeight: 'bold',
        marginLeft: 52,
        // marginRight: 'auto',
	},
    icon: {
		marginTop: 5,
        marginLeft: 10
	},
    newsTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        margin: 10
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
      moreInfotxt: {
          fontSize: 10,
      },
      posterMoreInfo: {
        width: 320,
        height: 180,
        marginLeft: 'auto',
        marginRight: 'auto',
        margin: 10
      },
      moreInfoTitle: {
        marginBottom: 15,
        textAlign: "center",
        fontSize: 22,
      },
      moreInfoContent: {
        textAlign: "center",
        fontSize: 14,
        margin: 5,
      },
      moreInfotxt: {
        textAlign: "center",
        fontSize: 14,
      },
      moreInfoButtonContainer: {
          flexDirection: 'row',
          justifyContent: 'space-evenly'
      },
      buttongrad: {
		width: 100,
		height: 40,
		borderRadius: 10,
		borderWidth: 2,
		justifyContent: 'center',
		margin: 10
	},

	buttonTxt: {
		color: 'black',
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 16,

	}
})
