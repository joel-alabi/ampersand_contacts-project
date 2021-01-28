import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image,Dimensions } from 'react-native';
import MemberProfile from './DetailScreen/MemberProfile';
import MyProfile from './DetailScreen/MyProfile';
import RegisterScreen from './LoginScreen/RegisterScreen';
import SignInScreen from './LoginScreen/SignInScreen';
import QrcodeDetails from './QRCodeDeatail/QrcodeDetails';
import QRScanning from './QRCodeDeatail/QRScanning';
import Ampersand from './Welcome/Ampersand';
import WelcomeScreen from './Welcome/WelcomeScreen';


import { AntDesign } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()
const { width, height } = Dimensions.get("screen");


export default function App() {
  return (
    <View style={styles.container}>
      {/*  */}
       {/* </>*/}
        {/* </>*/}
         {/*</> */}
          {/* */}
      
     
      {/* </> */}
     {/*  </>*/}
     {/* </> */}
      <NavigationContainer>
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
              backgroundColor:"#e83a63"
            },
            headerTintColor: "white",
            headerTitleAlign: "center",
          }}
      name="MyProfile" component={MyProfile} />
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
            header: () => null
          
          }}
       name="QRScanning" component={QRScanning} />
    </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1

  },
  image: {
    height: 0.04 * height,
    width: 0.35 * width,
    marginBottom:5
  },
});
