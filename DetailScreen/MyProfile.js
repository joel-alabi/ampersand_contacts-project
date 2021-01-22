import React from 'react'
import { View,Image,Text,StyleSheet } from 'react-native';

import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default function MyProfile() {
    return (
        <View style={styles.container}>

                <View style={styles.Info}>
                   <View style={styles.profile}>
                    <Image source={require('../assets/etty-fidele-YYfzJhfNU14-unsplash.jpg')} style={styles.image} />
                    <View style={styles.profiledetails}>
                        <Text style={{ fontWeight: "bold", fontSize: 20, marginBottom: 5 }}>Joan Shay</Text>
                        <Text style={{ fontWeight: "400", fontSize: 17,color:'gray' }}>Head of Marketing</Text>
                    </View>
                </View>

                </View>
                 <View style={styles.profilestyle}>
                <Entypo name="twitter-with-circle" size={40} color="gray" />
                <Entypo name="linkedin-with-circle" size={40} color="gray"  style={{paddingLeft:10}}/>
                </View>

                 <View style={{paddingTop:40}}>
                     <View style={{ flexDirection: "row", marginBottom: 20,marginLeft:30, }}>
                <Ionicons name="md-call-outline" size={24} color="black" />
                    <Text style={{fontSize:15,marginLeft:10,}}>+233 (245) 234 123</Text>
                </View>

                <View style={{ flexDirection: "row", marginBottom: 20 ,marginLeft:30,}}>
                <MaterialCommunityIcons name="email-outline" size={24} color="black" />
                    <Text style={{fontSize:15,marginLeft:15,}}>larry@ampersandll.co</Text>
                </View>

                <View style={{ flexDirection: "row",marginLeft:34,}}>
                <Octicons name="location" size={24} color="black" />
                    <Text style={{fontSize:15,marginLeft:19,}}>Shoreditch,UK</Text>
                </View>
                 </View>
                
            </View>
    )
}

const styles = StyleSheet.create({
    container:{

    },
    Info:{
        marginLeft:20
    },
    profile: {
        flexDirection: "row",
        marginTop: 60,

    },
    profiledetails: {
        marginLeft: 20,
        marginTop: 10
    },
    image: {
        borderRadius: 50,
        height: 80,
        width: 80,
    },
   profilestyle:{
       marginTop:18,
       marginLeft:25,
       flexDirection:'row'
   }
})
