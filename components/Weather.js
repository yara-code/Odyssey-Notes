import React from "react"
import {View,Text,Dimensions,StyleSheet,Image,TouchableOpacity,TextInput} from "react-native"
import {LinearGradient} from 'expo-linear-gradient'
import { Icon } from 'react-native-elements'

const Dev_Height = Dimensions.get("window").height
const Dev_Width = Dimensions.get("window").width


export default class Weather extends React.Component{
  constructor(props){
    super(props);
      this.state ={
        data: [],
        isLoading: true,
        temp:"",
        city:"Los Angeles",
        icon:"",
        city_display:"",
        desc: "",
        main:"",
        humidity:"",
        pressure:"",
        visiblity:"",
        toggle: true
    }
    this.fetch_weather()
  }

  fetch_weather=()=> {
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+this.state.city+'&appid=ad9f05affde6999ba09d7258df51e3b4')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json });
        this.setState({ temp : ((json.main.temp-273.15)* (9/5) + (32)).toFixed(0) +" °F" })
        this.setState({ city_display : json.name })
        this.setState({ icon: json.weather[0].icon})
        this.setState({ desc : json.weather[0].description})
        this.setState({ main : json.weather[0].main})
        this.setState({ humidity : json.main.humidity+" %"})
        this.setState({ pressure : json.main.pressure+" hPa"})
        this.setState({ visibility : (json.visibility/1000).toFixed(2)+" Km"})
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  toggleTheme(){
    this.setState({
      toggle:this.state.toggle ? false : true
    })
  }
  render(){
    return(
     
      // <View style={styles.mc}>
      <View style={[styles.container,{backgroundColor: this.state.toggle ? 'black' : 'white'}]}>
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
              onPress={() =>  this.props.navigation.navigate("Home")}
            />
					  <Text style={styles.title}> Weather </Text>
            <Icon
						style={styles.icon}
						name='cloud'
						type='font-awesome'
						color='black'
						size= '40'
					/>
				  </View>
        </LinearGradient>
        <TouchableOpacity onPress={()=>this.toggleTheme()}>
            <Text style={[styles.text_color, {color: this.state.toggle ? 'white' : 'black'}]}> ChangeTheme </Text>
          </TouchableOpacity>
        <View style={styles.Search_Box_View}>
          <TextInput placeholder="Search" placeholderTextColor="#4C64FF" style={styles.Search_Box} onChangeText={(text)=>this.setState({city : text})} />
            <TouchableOpacity style={styles.button_touch} onPress={this.fetch_weather}>
              <Icon name="search" size={35} color="#00FFFF" />
            </TouchableOpacity>
          </View>
          {/* <View style={[styles.container,{backgroundColor: this.state.toggle ? 'white' : 'black'}]}> */}
            {/* <TouchableOpacity onPress={()=>this.toggleTheme()}>
              <Text style={[styles.text_color, {color: this.state.toggle ? 'black' : 'white'}]}> ChangeTheme </Text> */}
            {/* </TouchableOpacity> */}
          {/* </View> */}
        <View style={styles.Weather_Box_Main}>
          <View style={styles.Weather_Holder_View}>
              <Image tintColor='#FFF' source={{uri:"http://openweathermap.org/img/wn/"+this.state.icon+"@2x.png",}} style={styles.Weather_Image}/>
              <View>
                <Text style={styles.temprature_text}>{this.state.temp}</Text>
                <Text style={styles.city_text}>{this.state.city_display}</Text>
              </View>
            </View>
        </View>

        <View style={styles.Info_Box_View}>
          <View style={styles.Info_Holder_Veiw}>
            <Text style={styles.Main_Text}>{this.state.main}</Text>
            <Text style={styles.description_text}>{this.state.desc}</Text>
            <Text style={styles.humidity_text}>Humidity : {this.state.humidity}</Text>
            <Text style={styles.pressure_text}>Pressure : {this.state.pressure}</Text>
            <Text style={styles.visibility_text}>Visibility : {this.state.visibility}</Text>
          </View>
        </View>
      </View>      
    )
  }
}

const styles = StyleSheet.create({
  container:{
    height:Dev_Height,
    width: Dev_Width
  },
  text_color:{
    fontSize:30,
    color:"white",
  },
  mc: {
    backgroundColor: 'black',
  },
  Image_Background_Style:{
    height:"100%",
    width:"100%"
  },
  Search_Box_View:{
    height:"18%",
    width:"100%",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row",
    marginTop: -10
  },
  Search_Box:{
    height:"35%",
    width:"80%",
    borderColor:"#8000FF",
    borderWidth:1,
    borderRadius:15,
    color:"#FFF",
    paddingHorizontal:15
  },
  button_touch:{
    marginLeft:"5%",
    height:"35%",
    width:"8%",
    justifyContent:"center",
    alignItems:"center"
  },
  Weather_Box_Main:{
    height:"30%",
    width:"100%",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row",
    
  },
  Weather_Holder_View:{
    height:"80%",
    width:"90%",
    // backgroundColor: 'rgba(255, 255, 255, 0.05)',
    backgroundColor: '#329BFF',
    borderColor: '#6c5ce7',
    borderStyle: 'solid',
    borderRadius:45,
    alignItems:"center",
    flexDirection:"row",
    marginTop:-35
  },
  Weather_Image:{
    height:"80%",
    width:"50%"
  },
  temprature_text:{
    fontSize:35,
    color:"black",
    marginLeft:"5%"
  },
  city_text:{
    fontSize:25,
    color:"black",
    marginLeft:"5%",
    marginTop:"3%"
  },
  Info_Box_View:{
    height:"40%",
    width:"100%",
    justifyContent:"center",
    alignItems:"center",
  },
  Info_Holder_Veiw:{
    height:"80%",
    width:"90%",
    // backgroundColor: 'rgba(255, 255, 255, 0.05)',
    backgroundColor: '#4C64FF',
    borderColor: '#6c5ce7',
    borderStyle: 'solid',
    borderRadius:45,
    marginTop:-55
  },
  Main_Text:{
    fontSize:30,
    color:"black",
    marginLeft:"8%",
    marginTop:"3%",
    fontWeight:"bold",
    textAlign:"center"
  },
  description_text:{
    fontSize:22,
    color:"black",
    marginLeft:"8%",
    marginTop:"3%",
    textAlign:"center"
  },
  humidity_text:{
    fontSize:22,
    color:"black",
    marginLeft:"8%",
    marginTop:"3%",
    textAlign:"center"
  },
  pressure_text:{
    fontSize:22,
    color:"black",
    marginLeft:"8%",
    marginTop:"3%",
    textAlign:"center"
  },
  visibility_text:{
    fontSize:22,
    color:"black",
    marginLeft:"8%",
    marginTop:"3%",
    textAlign:"center"
  },
  title: {
		fontSize: 40,
		color: 'black',
		fontWeight: 'bold',
    marginLeft: 52,
        // marginRight: 'auto',
	},
  nav: {
		flexDirection: 'row',
		textAlign: 'center',
		paddingTop: 40,
        // marginLeft: 'auto',
        // marginRight: 'auto',
        alignContent: 'space-between'
	},
  icon: {
		marginTop: 5,
    marginRight: 10
	},
})