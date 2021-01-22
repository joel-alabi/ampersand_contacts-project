import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MemberProfile from './DetailScreen/MemberProfile';
import MyProfile from './DetailScreen/MyProfile';
import RegisterScreen from './LoginScreen/RegisterScreen';
import SignInScreen from './LoginScreen/SignInScreen';
import QrcodeDetails from './QRCodeDeatail/QrcodeDetails';
import Ampersand from './Welcome/Ampersand';
import WelcomeScreen from './Welcome/WelcomeScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Ampersand/> */}
       {/* <WelcomeScreen/>*/}
        {/* <SignInScreen/>*/}
         {/*<RegisterScreen/> */}
          {/* <MyProfile/>*/}
      <QrcodeDetails/>
     
      {/*  <MemberProfile/>*/}
     
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',

  },
});
