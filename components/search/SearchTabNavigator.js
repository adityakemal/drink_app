import React from "react";
import {StyleSheet, Text, View, Icon} from 'react-native';

import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs';

import FavouriveTab from "./tabnavigator/FavouriteTab";
import SearchTab from "./tabnavigator/SearchTab";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {Ionicons} from '@expo/vector-icons';



const SearchTabNavigator = createBottomTabNavigator({
    Search : {
        screen : SearchTab,
        navigationOptions : {
            tabBarLabel: 'SEARCH YOUR DRINK!',
            tabBarIcon:({tintColor,focused})=>{
                return <Ionicons name="ios-search" color={tintColor}  size={25}/>  
            }  
        }
         
    },
    Favourite : { //nama disini tidak boleh Home
        screen : FavouriveTab,
        navigationOptions: ({ navigation }) => ({
            tabBarLabel: 'YOUR FAVOURITE DRINK!',

            tabBarOnPress: () => {
                // console.log('====================================');
                // console.log(navigation);
                // console.log('====================================');
                navigation.navigate('Favourite')
                // navigation.emit({
                //     type: 'tabPress',
                //     target: route.key,
                //   });

        },

            tabBarIcon:({tintColor,focused})=>{
                return <Ionicons name="ios-beer" color={tintColor}  size={25}/>  
            }  
        }),
        // navigationOptions : {
        //     tabBarLabel: 'FAVOURITE',
        //     tabBarIcon:({tintColor,focused})=>{
        //         return <Ionicons name="ios-beer" color={tintColor}  size={25}/>  
        //     }  
        // }
    },
},{
    tabBarOptions: {
        style : {backgroundColor : 'white'},
        activeTintColor: 'coral',
        inactiveTintColor: 'grey',
        labelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
        //   fontFamily: defaults.fontFamily
        },
        // style: styles.tabBar,
      },
})

export default createAppContainer(SearchTabNavigator)