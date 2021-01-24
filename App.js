import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MemberProfile from './DetailScreen/MemberProfile';
import MyProfile from './DetailScreen/MyProfile';
import RegisterScreen from './LoginScreen/RegisterScreen';
import SignInScreen from './LoginScreen/SignInScreen';
import QrcodeDetails from './QRCodeDeatail/QrcodeDetails';
import QRScanning from './QRCodeDeatail/QRScanning';
import Ampersand from './Welcome/Ampersand';
import WelcomeScreen from './Welcome/WelcomeScreen';




import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

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
      <Stack.Screen name="Home" component={Ampersand} />
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="MemberProfile" component={MemberProfile} />
      <Stack.Screen name="MyProfile" component={MyProfile} />
      <Stack.Screen name="QRcodeDetails" component={QrcodeDetails} />
      <Stack.Screen name="QRScanning" component={QRScanning} />
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
});
