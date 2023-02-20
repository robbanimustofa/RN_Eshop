import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import ProductContainer from '../Screens/Product/ProductContainer'

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator  >
            <Stack.Screen
                name='Home'
                component={ProductContainer}
                options={{
                    headerShown: false
                }}

            />
        </Stack.Navigator>
    )
}

export default function HomeNavigator() {
    return <MyStack />
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
    },
})