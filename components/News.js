import React, { useState, useEffect } from 'react'
import {View, StyleSheet, Text, ActivityIndicator, FlatList,Dimensions, Image} from 'react-native'
const {width,height} = Dimensions.get('window')


export default function News(props) {
    console.log(props)
    let resultPacket = props.route.params.newsfeed
    let resultsArray = resultPacket;

    const Item = ({data}) => (
        <View style={styles.container}>
            <Image style={styles.poster} source={{uri: data.urlToImage}}/>
            <Text>{data.content}</Text>
            {/* <Text style={styles.title}>{data.author}</Text>
            <Text style={styles.title}>{data.description}</Text>
            <Text style={styles.title}>{data.publishedAt}</Text>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.title}>{data.url}</Text> */}
        </View>
    )

    const renderList = ({item}) => <Item data={item} />;

    return (
        <View>
            <View style={styles.safeareaview}>
                <FlatList
                    data={resultsArray}
                    renderItem={renderList}
                />
            </View> 
        </View>
        
    )
}

const styles = StyleSheet.create({
    safeareaview: {
        backgroundColor: '#bdc3c7',
        padding: 20
    },
    container: {
        alignContent: 'center',
        margin: 20,
        backgroundColor: '#273c75',
        borderStyle: 'solid',
        borderWidth:3,
        borderRadius: 20,
    },
    poster: {
        width: 230,
        height: 300,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 20,
    },
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
