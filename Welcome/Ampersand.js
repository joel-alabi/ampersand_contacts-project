import React, { Component } from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'; 
export default class Ampersand extends Component {
    render() {
        return (
            <View style={styles.welcome}>
               <Image source={require('../assets/ampersand-removebg-preview.png')} style={styles.Image}/>
               <View style={styles.Ampersand}>
                   <Text style={styles.text}>AMPERSAND</Text>
                   <Text style={styles.contact}>CONTACT</Text>
               </View>
               <TouchableOpacity style={styles.getstarted}>
                   <Text style={{fontWeight:'300', fontSize:17}}>GET STARTED</Text>
                   <Text style={styles.empty}></Text>
               </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    welcome: {
      backgroundColor: '#fff',
      alignItems: 'center',
      marginTop:130
    },
    Image:{
        height:70,
        width:250
    },
    Ampersand:{
    textAlign:'center',
    marginTop:130,
    },
    text:{
        fontSize:25,
        fontWeight:'bold',
        color:'gray'
    },
    contact:{
        fontWeight:'bold',
        fontSize:25,
        paddingLeft:15,
        color:'gray'
    },
    getstarted:{
marginTop:200,
    },
    empty:{
        height:2,
        width:90,
        backgroundColor:'#e83a63'
    },
  });
  