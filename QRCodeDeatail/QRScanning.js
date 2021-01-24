import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button ,TouchableOpacity} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { AntDesign, Entypo } from '@expo/vector-icons';

export default function QRScanning() {
    
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      <View style={styles.icons}>
                <Entypo name="flash" size={24} color="white" style={{ marginRight: 60 }} />
                <TouchableOpacity>
                    <AntDesign name="close" size={24} color="white" />
                </TouchableOpacity>
            </View>

            <Text style={{ alignSelf: "center", fontWeight: "700",color:"white" ,marginTop:5}}>Scan QR Code </Text>

            <View style={styles.footer}>
                <Text style={{
                    marginHorizontal: 20, color: "black",
                }}>Want to share your contact?</Text>

                <TouchableOpacity  style={styles.scan}>
                    <Text style={{ color: 'red' }}>Send QR</Text>
                </TouchableOpacity>
            </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
        justifyContent: "space-between",
        backgroundColor: "black"
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop:80
},
footer: {
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    height: 50,
    justifyContent:"space-around",
},
scan:{
    backgroundColor: "white",
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: "red",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderWidth: 1
}
});