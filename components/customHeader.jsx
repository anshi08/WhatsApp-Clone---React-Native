import { View, Text,StyleSheet,Image,Dimensions, Pressable } from 'react-native'
import { EvilIcons,Entypo,MaterialIcons,Ionicons } from '@expo/vector-icons';


const CustomHeader = ({messageHeader,headerShown,navigation,storiesThreeDot}) => {
  const backHandler=()=>{
    navigation.goBack() 
  }
  
  return (
    <View style={styles.header}>
    <View style={styles.leftHeader}>
      {
        headerShown ?
        <View style={styles.leftSide}>
        <Ionicons name="arrow-back" size={24} color="black" onPress={backHandler} />
        <Pressable style={styles.profileDetails} onPress={()=>navigation.navigate('profileDetail')}>
        <Image
         style={styles.img}
         source={{
           uri: 'https://images.unsplash.com/photo-1506795660198-e95c77602129?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
         }}
       />
       <Text style={styles.phoneNumber}>+91-8979669612</Text>
       </Pressable>
        </View>:
        <>
          <Text style={styles.logo}>WhatsApp</Text>
        </>
      }

  </View>
  {storiesThreeDot ? <Entypo name="dots-three-vertical" size={20} color="black" /> :  <View style={styles.rightHeader}>
    
    {messageHeader ? <>
      <MaterialIcons name="videocam" size={25} color="black" />
  <Ionicons name="ios-call" size={24} color="black" />
    </>:<>
    <EvilIcons name="camera" size={30} color="black" />
  <Entypo name="magnifying-glass" size={25} color="black" />
    </>
    }


  <Entypo name="dots-three-vertical" size={20} color="black" /> 
  </View> }

  </View>
  )
}

export default CustomHeader

const styles = StyleSheet.create({
    header:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginHorizontal:10,
        marginVertical:15,
      },
      leftHeader:{
        flex:3,
      },
      rightHeader:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",

      },
      logo:{
        fontSize:18
      },
      img:{
        width:Dimensions.get('screen').width/8,
        height:Dimensions.get('screen').height/16,
        borderRadius:100
    },
    leftSide:{
      marginHorizontal:'1%',
      flexDirection:"row",
      justifyContent:"flex-start",
      alignItems:"center"
    },
    phoneNumber:{
      fontSize:14,
      marginLeft:'2%'
    },
    profileDetails:{
flexDirection:"row",
justifyContent:'center',
alignItems:"center"
    }
})