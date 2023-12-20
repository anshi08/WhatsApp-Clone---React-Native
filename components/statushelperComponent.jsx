import { View, Text,StyleSheet,FlatList,Dimensions } from 'react-native'
import React from 'react'
import StatusCard from './statusCard'

const StatusHelperComponent = ({title,data,showTitle=true,time,navigation}) => {
  return (
    <>
    {showTitle && <Text style={styles.status}>{title}</Text> }       
    <FlatList
    data={data}
    keyExtractor={item =>item}
    renderItem={({item}) =>{
      return      <StatusCard timeCreated={time} navigation={navigation}/>
    }}

    />
    </>
  )
}

export default StatusHelperComponent

const styles = StyleSheet.create({
    status:{

        marginHorizontal:'3%',
        fontSize:16,
        marginBottom:"1%"
    }          
})