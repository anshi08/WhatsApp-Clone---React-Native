import { View,FlatList} from 'react-native'
import React,{useState} from 'react'
import StatusHelperComponent from '../../components/statushelperComponent'
import { FloatingAction } from "react-native-floating-action";
import { Ionicons,Entypo,FontAwesome,EvilIcons } from '@expo/vector-icons';



const Status = ({navigation}) => {
 

  return (
    <View>
      <FlatList
      data={[1]}
      keyExtractor={item =>item}
      renderItem={()=>{
        return <>
        <StatusHelperComponent title="" data={['']} showTitle={false} time="Tap to add status update" navigation={navigation}/>    
        <StatusHelperComponent title="Recent updates" data={['23','d']} time="18 minutes ago" navigation={navigation}/>
        <StatusHelperComponent title="Viewed updates" data={[1,2,3,4,5,6,8,7,22,24,56,47]} time="18 minutes ago" navigation={navigation}/>
        </>
      }}
      />
          <View style={{marginBottom:'-17%'}}>
          <FloatingAction
          color='green'
          floatingIcon={<Ionicons name="md-camera" size={24} color="white" />}
          actions={[]}
          onPressItem={name => {
            console.log(`selected button: ${name}`);
          }}
          animated={true}
          onPressMain={()=>navigation.navigate('camera')}
        />
        </View>
        <View>
          <FloatingAction
          color='green'
          floatingIcon={<Entypo name="edit" size={24} color="white" />}
          actions={[]}
          onPressItem={name => {
            console.log(`selected button: ${name}`);
          }}
          animated={true}
          onPressMain={()=>navigation.navigate('textStatus')}

        />
        </View>

</View>
      

      
  )
}

export default Status


