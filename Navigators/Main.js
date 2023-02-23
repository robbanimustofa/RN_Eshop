import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'
import HomeNavigator from "./HomeNavigator";

const Tab = createBottomTabNavigator();

const Main = () => {
    return (
        <Tab.Navigator
            initialRouteName="Beranda"
            screenOptions={{
                headerShown: false,
                tabkeyboardHidesTabBar: false,
                tabBarshowLabel: true,
                tabBaractiveTintColor: '#22d3ee',
            }}
        >
            <Tab.Screen
                name="Beranda"
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon
                            name="home"
                            color={color}
                            size={30}
                        />
                    )
                }}
            >
            </Tab.Screen>
            <Tab.Screen
                name="Cart"
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon
                            name="shopping-cart"
                            color={color}
                            size={30}
                        />
                    )
                }}
            >
            </Tab.Screen>
            <Tab.Screen
                name="Admin"
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon
                            name="cog"
                            color={color}
                            size={30}
                        />
                    )
                }}
            >
            </Tab.Screen>
            <Tab.Screen
                name="User"
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon
                            name="user"
                            color={color}
                            size={30}
                        />
                    )
                }}
            >
            </Tab.Screen>
        </Tab.Navigator>
    )
}

export default Main;