import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './Screens/Home';
import DetailScreen from './Screens/Details';

export default function App(){
  return <AppContainer/>;

}
const appstacknavigator=createAppContainer(
  {
    Home:{
      screen:HomeScreen,
      navigationOptions:{
        headerShown:false
      }
    },
    Detail:{
      screen:DetailScreen,

    }
  },
  {
    initialRouteName:"Home"
  }
)
const AppContainer=createAppContainer(
  appstacknavigator
)