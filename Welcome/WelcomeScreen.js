import React, { Component } from 'react'
import { View } from 'react-native';

export default class WelcomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>welcomes screen </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  