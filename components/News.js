import React from 'react'
import {View, StyleSheet, Text, ActivityIndicator, FlatList,Dimensions} from 'react-native'
const {width,height} = Dimensions.get('window')
export default class News extends React.Component{
    
    
     state={
            news:[],
            loading: true
        }
    

    fetchnews = () => {
        fetch('GET https://newsapi.org/v2/top-headlines?country=us&apiKey=API_KEY=3ddc86bc606a4606bea5004e0614a6cf')
        .then((res)=>res.json())
        .then((response)=>{
            this.setState({
                news: response.articles,
                loading:false
            })
        })
    }
    
    componentDidMount(){
        this.fetchnews()
    }

    render(){
        if(this.state.loading){
            return (
                <View Style= {{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#333'}}>
                    <ActivityIndicator size='large' colors='#fff'/>
                </View> 
            );
        }else{
            return(
                    <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={{fonmtSize:25, color:'#fff'}}>Top Headline</Text>
                        <Text style={{fontSize:35,color:'#fff'}}>Headline</Text>

                    </View>
                    <View style={styles.news}>
                        <FlatList
                        data={this.state.news}
                        renderItem={({item})=>{
                                return(
                                    <View style ={{width:width-50,height:180,backgroundCOlor:'#fff',marginBottom:15}}>

                                    </View>
                                )
                            }}
                        />
                    </View>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({

    container : {
        flex: 1,
        backgroundColor:'#333'
    }



})
