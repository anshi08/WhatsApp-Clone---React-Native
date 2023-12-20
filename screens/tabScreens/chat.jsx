import { View, FlatList } from 'react-native'
import React from 'react'
import ContactCard from '../../components/contactCard'
import { FloatingAction } from "react-native-floating-action";
import { MaterialIcons } from '@expo/vector-icons';

const Chat = ({navigation}) => {
  const contacts = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,]
  return (
    <View>
    <FlatList
    data={contacts}
    renderItem={({item}) =>{
      return   <ContactCard navigation={navigation}/>
    }}
    />
    <FloatingAction
    color='green'
    floatingIcon={<MaterialIcons name="message" size={24} color="white" />}
    actions={[]}
    onPressItem={name => {
      console.log(`selected button: ${name}`);
    }}
    animated={true}
  />
    </View>
  
  )
}

export default Chat