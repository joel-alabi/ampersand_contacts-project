import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image,Dimensions } from 'react-native';
import MemberProfile from '../../DetailScreen/MemberProfile';
import MyProfile from '../../DetailScreen/MyProfile';
import RegisterScreen from '../../LoginScreen/RegisterScreen';
import SignInScreen from '../../LoginScreen/SignInScreen';
import QrcodeDetails from '../../QRCodeDeatail/QrcodeDetails';
import QRScanning from '../../QRCodeDeatail/QRScanning';
import Ampersand from '../../Welcome/Ampersand';
import WelcomeScreen from '../../Welcome/WelcomeScreen';
import { AntDesign } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator()

import {connect} from 'react-redux';
import {logout} from '../redux/actions/authActions';


function AppNavigation({auth,logout}) {
  return (
    <View style={styles.container}>
      <NavigationContainer>
     {
       auth.login ?
       // show deatils
       <Stack.Navigator>
       <Stack.Screen 
 options={({route, navigation}) => ({
  headerTitle: (
        <Text>AMPERSAND</Text>
      ),
      headerStyle:{
        backgroundColor:"#e83a63"
      },
      headerTintColor: "white",
      headerTitleAlign: "center",
      headerRight:() => (<TouchableOpacity onPress={() => { navigation.navigate("MyProfile") 
      }}style={{ color: "#3b31eb", marginRight: 20 }}>
        <AntDesign name="user" size={24} color="white" /></TouchableOpacity>)
     
    })}
    
name="QRcodeDetails" component={QrcodeDetails} />

<Stack.Screen 
options={{
      title: "Member Profile",
      headerStyle:{
        backgroundColor:"#e83a63"
      },
      headerTintColor: "white",
      headerTitleAlign: "center",
    }}
name="MemberProfile" component={MemberProfile} />
<Stack.Screen 
 options={{
      title: " My Profile",
      headerStyle:{
        backgroundColor:"#e83a63",
        
      },headerRight:()=>(
          <TouchableOpacity style={{marginRight:10}}
          onPress={logout}
          >
            <Text>LOGOUT</Text>
          </TouchableOpacity>
        ),
      headerTintColor: "white",
      headerTitleAlign: "center",
    }}
name="MyProfile" component={MyProfile} />

<Stack.Screen
 options={{
      header: () => null
    
    }}
 name="QRScanning" component={QRScanning} />
</Stack.Navigator>


       :

      // show  login and register
      <Stack.Navigator>

<Stack.Screen
options={{
      header: () => null
    }}
 name="Home" component={Ampersand} />
<Stack.Screen 
options={{
      header: () => null
    }}
name="WelcomeScreen" component={WelcomeScreen} />
<Stack.Screen 
options={{
      title: "SIGN IN",
      headerStyle:{
        backgroundColor:"#e83a63"
      },
      headerTintColor: "white",
      headerTitleAlign: "center",
    }}
name="SignInScreen" component={SignInScreen} />
<Stack.Screen 
options={{
      title: "Register",
      headerStyle:{
        backgroundColor:"#e83a63"
      },
      headerTintColor: "white",
      headerTitleAlign: "center",
    }}
name="RegisterScreen" component={RegisterScreen} />


</Stack.Navigator>
     }
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>

   
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1

  },
 
});

const mapStateToProp=(state)=>{
  return{ auth:state}
}

export default connect(mapStateToProp,{logout})(AppNavigation);