import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Chart from '../Screens/Chart/Chart'
const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator  >
            <Stack.Screen
                name='Cart'
                component={Chart}
                options={{
                    headerShown: false,
                }}

            />
        </Stack.Navigator>
    )
}

export default function CartNavigator() {
    return <MyStack />
}
