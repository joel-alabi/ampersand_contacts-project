import React, { Component } from 'react'
import { StyleSheet, View,Image,Text ,TouchableOpacity,TextInput,Platform} from 'react-native';




export default class SignInScreen extends Component  {
    
    


    render() {
        
        const {navigation} = this.props
        return (
            
            <View style={styles.SignIn}>

            
                 <Image source={require('../assets/ishant-mishra-napAS8Izafs-unsplash.jpg')} style={styles.Image}/>

                
<View style={styles.SignInScreen}>
            <View style={{
                flexDirection: "row",
                 alignItems: "center",
                justifyContent: "space-between"
            }}>
                <Text style={{ fontWeight: "bold", fontSize: 15, marginLeft: 15,marginBottom:10 }}>Email</Text>
                <TextInput style={{ marginRight: 20,marginBottom:10 }}
                    placeholderTextColor="#aaaaaa"
                    placeholder="joelalabi45@gmail.com"
                />
            </View>

            <View style={{backgroundColor:"#e6e7e8",height:2,width:344,marginBottom:10,marginLeft:15}}></View>

            <View style={{
                flexDirection: "row", alignItems: "center", justifyContent: "space-between"
            }}>
                <Text style={{ fontWeight: "bold", fontSize: 15, marginLeft: 15,marginBottom:35 }}>Password</Text>
                <TextInput style={{ marginRight: 20,marginBottom:35 }}
                    placeholderTextColor="#aaaaaa"
                    placeholder="****"
                    secureTextEntry={true}
                />
            </View>

            <View>
                <TouchableOpacity style={styles.buttonContainer}  onPress={() => { navigation.navigate("QRcodeDetails") }}> 
             <Text style={styles.buttonText}>SIGN IN</Text>
                </TouchableOpacity>
            </View>

            <View>
                <View style={styles.forgotPassword}>
                    <Text style={{ fontSize: 15 }}>Forgot? </Text>
                    <View>
                        <Text style={{ fontSize: 15,marginBottom:5 }}>Reset Password</Text>
                        <View style={{
                            backgroundColor: "#e83a63",
                            height: 2,
                            width: 107,
                            borderRadius: 15,
                        }}></View>
                    </View>
                </View>
            </View>
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
    spinnerTextStyle: {
        color: '#FFF',
    
      },
      instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
      },
    Image:{
        height:250,
        width:"100%",
    },
    heading: {
        flexDirection: "row",
        backgroundColor: "#de4f45",
        height: 70,
        justifyContent: "space-around",
        alignItems: "center",
    },
    buttonContainer: {
        height: 40,
        width: 340,
        backgroundColor: "#e83a63",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 3,
        marginLeft: 10,
        marginBottom:50
    },
    buttonText: {
        color: "white",
        fontSize: 15,
    },
    forgotPassword: {
        flexDirection: "row",
        marginLeft: 20
    },
   SignInScreen:{
       paddingTop:50
   }
  });
  