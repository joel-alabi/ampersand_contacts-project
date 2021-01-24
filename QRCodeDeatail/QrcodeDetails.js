import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { QRCode  as CustomQRcode} from 'react-native-custom-qr-codes-expo';


export default function QrcodeDetails() {
    return (
        <View style={styles.maincontainer}>
                <View style={styles.container}>

                    <View style={styles.Exchang}>
                        <Text style={{
                            fontWeight: "bold", fontSize: 17, marginBottom: 5,marginRight: 70}}>Exchange Contact Information</Text>
                        <Text style={{fontSize: 15,marginRight:20}}>Scan this QR below to share your contacts</Text>
                    </View>

                    <View style={styles.QRcode}>
                        <CustomQRcode content='https://www.compassion.com' codeStyle='square' size={250}s/>
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

                    
                </View>
            <View style={styles.footer}>
                <View>
                    <Text >
                        Want to add a new connection ? 
                    </Text>
                </View>
                <View style={styles.scancontainer}>
                    <TouchableOpacity style={styles.scan} >
                        <Text style={styles.scancodeText}>Scan QR</Text>
                    </TouchableOpacity>
                </View>
            </View>
    </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection:"column"

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
        marginTop: 70,

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
    footer:{
        paddingTop:20,
        marginTop:80,
        paddingHorizontal:9,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderStyle:'solid',
        borderTopWidth:1,
        borderTopColor:'gray'
    },
    scan:{
        color:'red',
        borderStyle:'solid',
        borderRadius:1,
        borderColor:'red',
        paddingVertical:5,
        borderWidth:1
    },
    scancodeText:{
        fontSize:15,
        color:"red",
        paddingHorizontal:10,
        paddingVertical:0,
    },
    scancode:{
        borderStyle:'solid',
        borderWidth:1,
        borderColor:'red',
        borderRadius:3,
    },
    QRCode:{
        alignItems: "center",  
        marginTop:20,
    }
})