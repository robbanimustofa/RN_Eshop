import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View } from 'react-native'

const Tab = createBottomTabNavigator();

const Main = () => {
    <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
            keyboardHidesTabBar: true,
            showLabel: false,
            activeTintColor: '#e91e63'
        }}
    >
        <Tab.Screen>

        </Tab.Screen>
    </Tab.Navigator>
}