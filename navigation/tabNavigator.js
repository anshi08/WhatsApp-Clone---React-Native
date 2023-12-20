import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Chat from '../screens/tabScreens/chat';
import Status from '../screens/tabScreens/status'
import Calls from '../screens/tabScreens/calls';


const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
  return (

    <Tab.Navigator>
      {/* <Tab.Screen name="commun" component={Community}/> */}
      <Tab.Screen name="Chats" component={Chat} />
      <Tab.Screen name="Status" component={Status} />
      <Tab.Screen name='Calls' component={Calls}/>
    </Tab.Navigator>
  )
}

export default TabNavigator