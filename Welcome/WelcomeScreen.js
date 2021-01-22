import React, { Component } from 'react'
import { StyleSheet, View,Image,Text ,TouchableOpacity} from 'react-native';

export default class WelcomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                 <Image source={require('../assets/ishant-mishra-napAS8Izafs-unsplash.jpg')} style={styles.Image}/>

                 <View style={styles.Ampersand}>
                   <Text style={styles.text}>KEEP IN TOUCH WITH THE PEOPLE OF AMPERSAND</Text>
                   <Text style={styles.contact}>Sign In or Register with your Ampersand email</Text>
               </View>
               <View style={styles.press}>
               <TouchableOpacity style={styles.getstarted}>
                   <Text style={{fontWeight:'300', fontSize:17}}>REGISTER</Text>
                   <Text style={styles.empty}></Text>
               </TouchableOpacity>

               <TouchableOpacity style={styles.getstarted}>
                   <Text style={{fontWeight:'300', fontSize:17}}>SIGN IN</Text>
                   <Text style={styles.Signempty}></Text>
               </TouchableOpacity>
               </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    Image:{
        height:350,
        width:"100%",
    },
    Ampersand:{
        textAlign:'center',
        marginTop:20,
        },
        text:{
            fontSize:20,
            fontWeight:'bold',
            color:'gray',
            paddingLeft:15,
        },
        contact:{
            marginTop:5,
            fontSize:15,
            paddingLeft:15,
            color:'gray'
        },
        press:{
            marginTop:230,
            flexDirection:'row',
            justifyContent:'space-around'
        }
        ,
        empty:{
            height:2,
            width:70,
            backgroundColor:'#e83a63'
        },
        Signempty:{
            height:2,
            width:50,
            backgroundColor:'#e83a63'
        }
  });
  