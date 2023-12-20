import { Camera, CameraType } from 'expo-camera';
import { View, Text,Pressable,StyleSheet } from 'react-native'
import { Ionicons,FontAwesome,EvilIcons } from '@expo/vector-icons';
import React,{useState,useRef, useEffect} from 'react'






const CameraScreen = ({navigation}) =>{
 const [type, setType] = useState(CameraType.back);
const cameraRef = useRef(null)
const [permission, requestPermission] = Camera.useCameraPermissions();
function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

useEffect(()=>{
    if(permission!=='granted'){
        requestPermission()
        
        }
},[])

    return <View style={styles.cameraContainer}>    
    <Camera style={styles.camera} type={type}ref={cameraRef}>
    <View style={styles.buttonContainer}>
      <View style={styles.bottomContainer}>
      <EvilIcons name="image" size={44} color="white" />
     <Pressable onPress={()=>{
      try {
        takePic()
      } catch (error) {
      console.log("🚀 ~ file: Camera.jsx:35 ~ CameraScreen ~ error", error)
 
      }
     async function takePic(){
        if (cameraRef.current) {
            const photo = await cameraRef.current.takePictureAsync();
            // do something with the photo object
            console.log(photo)
            navigation.goBack()
          }
      }

     }}>
      <FontAwesome name="circle-thin" size={44} color="white" /> 
      </Pressable>
      <Pressable onPress={toggleCameraType}>
      <Ionicons name="ios-camera-reverse" size={44} color="white" />
      </Pressable>
      </View>
    </View>
  </Camera>
  </View>
  }

export default CameraScreen

const styles = StyleSheet.create({
    cameraContainer:{
      height:'100%',
      width:'100%'
    },
    camera:{
   flex:1
    },
    buttonContainer:{
      flex:1,
      justifyContent:"flex-end",
      alignItems:"center",
      marginBottom:10,
  
    },
   
    text:{
      fontSize:20
    },
    bottomContainer:{
  flexDirection:"row",
  justifyContent:"space-evenly",
  alignItems:"center",
  
  width:'100%'
    }
  })