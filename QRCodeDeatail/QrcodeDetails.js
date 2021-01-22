import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


export default function QrcodeDetails() {
    return (
        <View style={styles.container}>

            <View style={styles.Exchang}>
                <Text style={{
                    fontWeight: "bold", fontSize: 17, marginBottom: 5,marginRight: 70}}>Exchange Contact Information</Text>
                <Text style={{fontSize: 15,marginRight:20}}>Scan this QR below to share your contacts</Text>
            </View>

            
            <View style={styles.Info}>
                   <View style={styles.profile}>
                    <Image source={require('../assets/etty-fidele-YYfzJhfNU14-unsplash.jpg')} style={styles.image} />
                    <View style={styles.profiledetails}>
                        <Text style={{ fontWeight: "bold", fontSize: 20, marginBottom: 5 }}>Joan Shay</Text>
                        <Text style={{ fontWeight: "400", fontSize: 17,color:'gray' }}>Head of Marketing</Text>
                    </View>
                </View>
            </View>

            <View style={{backgroundColor: "#b2b9bf", height: 2,marginTop:550}}></View>

            
              <View style={styles.footer}>
              <Text>Want to add a new connection
              
              </Text>
                  <TouchableOpacity ><Text >Scan QR</Text></TouchableOpacity>
              </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    heading: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#de4f45",
        height: 85,
        justifyContent: "space-around"
    },
    left: {
        color: "white",
    },
    Exchang: {
        marginTop: 70,
        alignItems: "center",
    },
    Info:{
        marginLeft:20
    },
    profile: {
        flexDirection: "row",
        marginTop: 350,

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
    

})