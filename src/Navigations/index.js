import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import SecondScreen from '../Screens/SecondScreen';


const Stack = createNativeStackNavigator();

function Navigation() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                initialRouteName="HomeScreen"
                name="HomeScreen" component={HomeScreen} />
            <Stack.Screen
                name="SecondScreen" component={SecondScreen} />
        </Stack.Navigator>
    );
}

export default Navigation;