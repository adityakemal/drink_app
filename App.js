import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import HomeScreen from './components/home/HomeScreen'
import SearchTabNavigator from './components/search/SearchTabNavigator'
import fav from './components/search/tabnavigator/FavouriteTab'

const screens = {
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: {
            headerShown: false
        }
    },
    SearchTabNavigator: {
        screen: SearchTabNavigator,
        navigationOptions: {
          headerShown: false
          // title : null
      }
    },
}
const App = createStackNavigator(screens)
export default createAppContainer(App)