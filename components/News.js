import React, { useState, useEffect } from 'react'
import {View, StyleSheet, Text, Pressable, FlatList,Dimensions, Image, Modal} from 'react-native'
const {width,height} = Dimensions.get('window')
import { colors, Icon } from 'react-native-elements'
import {LinearGradient} from 'expo-linear-gradient'

export default function News(props) {

    let resultPacket = props.route.params.newsfeed
    let resultsArray = resultPacket;
    console.log(resultsArray)

    const [modalVisible, setModalVisible] = useState(false)

    const Item = ({data}) => (
        <Pressable
                // style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}
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
                        <Image style={styles.poster} source={{uri: data.urlToImage}}/>
                        <Text style={styles.newsTitle}>{data.title}</Text>
                        <Text>{data.content}</Text> 
                        <Text style={styles.moreInfotxt}>{data.author}</Text>
                        <Text style={styles.moreInfotxt}>{data.description}</Text>
                        <Text style={styles.moreInfotxt}>{data.publishedAt}</Text>
                        <Text style={styles.moreInfotxt}>{data.url}</Text>

                        <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}
                        >
                        <Text style={styles.textStyle}>Hide Modal</Text>
                        </Pressable>

                    </View>
                    </View>
                </Modal>
                
                <Image style={styles.poster} source={{uri: data.urlToImage}}/>
                <Text style={styles.newsTitle}>{data.title}</Text>
            
            </View>
        </Pressable>
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
                    />
                </View>

             
        </View>
        
    )
}

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
    enteredView: {
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
        elevation: 2
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
      }
    
})
// useEffect( () => {
    //         async function fetchData() {
    //             let res = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=f5037afaa4c647dfa836977a061e09e8')
    //             const data = await res.json()
    //             setNews(data.articles)
        
    //             setLoadingHandler = 'false'
    //         }

    //         let interval;   
            

    //         const Item = ({data}) => (
    //             <View>
    //                 <Text>HELLLLOOOO</Text>
    //             </View>
    //         )

            // const renderNewsList = ({item}) => <Item data={item} />;

    //         interval = setInterval(() => {
                            
    //                 if(loading){
    //                     return (
    //                         <View Style= {{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#333'}}>
    //                             <ActivityIndicator size='large' colors='#fff'/>
    //                         </View> 
    //                     );
    //                 }
    //                 else{
    //                     return(    
    //                         <FlatList
    //                             data={resultsArray}
    //                             renderItem={renderNewsList}
                                
    //                         />  
    //                     )
    //                 }
                
    //         },500000)
            
    //         return () => clearInterval(interval);
    // });