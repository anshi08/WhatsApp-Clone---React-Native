import {StyleSheet,SafeAreaView, StatusBar} from 'react-native'
import CustomHeader from '../components/customHeader';



import TabNavigator from '../navigation/tabNavigator';

const  Home = ({navigation})=> {
  return (
    <SafeAreaView style={styles.tabContainer}>
      <CustomHeader messageHeader={false} headerShown={false} navigation={navigation}/>
    <TabNavigator />
    </SafeAreaView>
  );
}

export default Home

const styles = StyleSheet.create({
  tabContainer:{
    flex:1,
    borderColor:"black",
  }

})