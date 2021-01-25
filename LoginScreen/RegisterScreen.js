import React, { Component } from 'react'
import {View,Image,Text,StyleSheet,TouchableOpacity,Button, TextInput, ScrollView} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';

export default class RegisterScreen extends Component {
    constructor(props){
        super(props)
        this.state={image:null
        }
        this.ImageSection=this.ImageSection.bind(this)
    }
    ImageSection =()=>{
        if(this.state.image===null){

            return(
                <View style={styles.addNewImageContainer}>
                    <Image style={styles.addNewImage} source={require('../assets/addUserPic.png')} />
                
                    <View style={styles.selectImageContainer} >
                        <TouchableOpacity style={styles.addNewImageBtn} onPress={this.selectPicture}>
                            <Text style={styles.addNewImageText}>ADD PROFILE PHOTO</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
       else if(this.state.image!==null){
            return(
                <View style={styles.signInImageContainer}>
                    <Image style={styles.signInImage} source={{uri:this.state.image}} />
                
                    <View style={styles.selectImageContainer} >
                        <TouchableOpacity style={styles.selectImageBtn} onPress={this.selectPicture}>
                            <Text style={styles.selectImageText}>EDIT PROFILE PHOTO</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        } 
    }

    selectPicture = async () => {
        await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
        const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
          aspect:[21, 13],
          allowsEditing: true,
        });
        if (!cancelled) this.setState({ image: uri });
        console.log(uri)
      };
      takePicture = async () => {
        await Permissions.askAsync(Permissions.CAMERA);
        const { cancelled, uri } = await ImagePicker.launchCameraAsync({
          allowsEditing: false,
        });
        this.setState({ image: uri });
      };
    render() {const {navigation} = this.props
        return (
            
            <View >
            <View > 
                   
            <View > 
                    
                    {this.ImageSection()}
                   
                </View>  
                </View>
            <View style={styles.sectionTwoContainer}>
            <View style={styles.emailPasswordInputContainer}>
                        <View style={styles.emailTextContainer}>
                            <Text style={styles.emailPasswordText}>
                               Full Name
                            </Text>
                        </View>
                        <View>
                            <TextInput
                                placeholder="joan shay"                                    
                                style={styles.emailPasswordInput}></TextInput>
                        </View>                                                 
                    </View>
            <View style={styles.emailPasswordInputContainer}>
                        <View style={styles.emailTextContainer}>
                            <Text style={styles.emailPasswordText}>
                                Email
                            </Text>
                        </View>
                        <View>
                            <TextInput
                                placeholder="joan.shay@sparrow.com"                                    
                                style={styles.emailPasswordInput}></TextInput>
                        </View>                                                 
                    </View>
            <View style={styles.emailPasswordInputContainer}>
                        <View style={styles.emailTextContainer}>
                            <Text style={styles.emailPasswordText}>
                                Phone Number
                            </Text>
                        </View>
                        <View>
                            <TextInput
                                placeholder="+233 (244) 245 190"                                    
                                style={styles.emailPasswordInput}></TextInput>
                        </View>                                                 
                    </View>
            <View style={styles.emailPasswordInputContainer}>
                        <View style={styles.emailTextContainer}>
                            <Text style={styles.emailPasswordText}>
                               Role
                            </Text>
                        </View>
                        <View>
                            <TextInput
                                placeholder="Director of Marketing"                                    
                                style={styles.emailPasswordInput}></TextInput>
                        </View>                                                 
                    </View>
            <View style={styles.emailPasswordInputContainer}>
                        <View style={styles.emailTextContainer}>
                            <Text style={styles.emailPasswordText}>
                                Twitter
                            </Text>
                        </View>
                        <View>
                            <TextInput
                                placeholder="@joansays"                                    
                                style={styles.emailPasswordInput}></TextInput>
                        </View>                                                 
                    </View>
               <View style={styles.emailPasswordInputContainer}>
                        <View style={styles.emailTextContainer}>
                            <Text style={styles.emailPasswordText}>
                                LinkedIn
                            </Text>
                        </View>
                        <View>
                            <TextInput
                                placeholder="/joan.shay"                                    
                                style={styles.emailPasswordInput}></TextInput>
                        </View>                                                 
                    </View>
                              <View style={styles.registerBtnContainer}>
                            <TouchableOpacity style={styles.registerBtn} onPress={() => { navigation.navigate("QRcodeDetails") }}>
                                <Text style={styles.registerBtnText}>
                                    REGISTER
                                </Text>
                            </TouchableOpacity>                        
                        </View>
            </View>
            </View>
            
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
       
        backgroundColor:'#F4F5F1',      
  },
  addNewImageContainer:{
    alignItems:'center',
    paddingVertical:50,
    height:210,
    backgroundColor:'#fbfbfb'
    
},
addNewImage:{
    marginTop:15,
    marginBottom:15,

},
addNewImageText:{
    color:'#fe2b4c'
},
  selectImageContainer:{
paddingLeft:10
  },
  emailInputContainer:{
      textAlign:'right'
  },
  signInImage:{
      width:420,
      height:190,
  },
    emailPasswordInputContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:5,
        paddingBottom:15,
        borderStyle:'solid',
        borderBottomColor:'#ccc',
        borderBottomWidth:1,
  },
  passwordInputContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginVertical:2,
},
signInImageContainer:{
    marginBottom:0,
},
  forgotTextResetBtnContainer:{
    flexDirection:'row',
    justifyContent:'flex-start',
  },
  selectImageBtn:{
      position:"relative",
      left:120,
      bottom:135,
      width:175
  },
  selectImageText:{
      paddingVertical:5,
      fontSize:15,
      paddingHorizontal:10,
      color:'white',
      borderStyle:'solid',
      borderWidth:1,
      borderRadius:3,
      borderColor:'white'
  },
  sectionTwoContainer:{
    paddingTop:5,
    paddingHorizontal:10,
  },
  emailPasswordInput:{
    fontSize:18,
    textAlign:'right', 
  },
  passwordInput:{
    fontSize:16,
    textAlign:'right', 
  },
  passwordText:{
    fontSize:18,
    paddingRight:15,
  },
  emailPasswordText:{
    fontSize:18,
    paddingRight:15,
  },
  registerBtnContainer:{     
      justifyContent:'center',
      alignItems:'center',
      marginTop:30,
      marginBottom:40,
  },
  registerBtn:{
      backgroundColor:"#FE2B4C",
      paddingHorizontal:139,
      paddingVertical:10,
      borderRadius:4,
  },
  registerBtnText:{
      color:'white',
      fontSize:18,
  },
  resetBtnText:{
    fontSize:18,
    borderStyle:'solid',
    borderBottomColor:'red',
    paddingBottom:5,
    margin:5,
    borderBottomWidth:2,
  },
})