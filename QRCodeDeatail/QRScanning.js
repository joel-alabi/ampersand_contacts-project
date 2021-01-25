import React from 'react';
import { Text, View, StyleSheet, Button ,TouchableOpacity,Image} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import { SimpleLineIcons } from '@expo/vector-icons';

export default function QRScanning({route,navigation}) {
  let QRScanning= route.params

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    navigation.navigate("MemberProfile")
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
                <TouchableOpacity onPress={() => { navigation.navigate("QrcodeDetails") }}>
                    <AntDesign name="close" size={24} color="white" />
                </TouchableOpacity>
               
            </View>
             <SimpleLineIcons name="frame" size={300} color="white"  style={{ marginLeft: 33,justifyContent:'center',flex:1,marginTop:80 }}/>

            <Text style={{ alignSelf: "center", fontWeight: "700",color:"white" ,marginVertical:90}}>Scan QR Code with Frame </Text>

            <View style={styles.footer}>
                <Text style={{
                    marginHorizontal: 20, color: "black",
                }}>Want to share your contact?</Text>

                <TouchableOpacity    onPress={() => {navigation.navigate("QrcodeDetails") }} style={styles.scan}>
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
Image:{
  height:100,
  width:90,
  paddingLeft:200
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