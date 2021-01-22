import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ampersand from './Welcome/Ampersand';
import WelcomeScreen from './Welcome/WelcomeScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Ampersand/>
      
      {/* <WelcomeScreen/>*/}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',

  },
});
