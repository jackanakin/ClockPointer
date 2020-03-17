import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { View, Text, StatusBar } from 'react-native';

import theme from './global/theme'

import Routes from './routes'
import SignIn from './screens/SignIn'
const Stack = createStackNavigator();

export default function App() {
    const authenticated = false;

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
                <Stack.Screen name="Routes" component={Routes} options={{ headerShown: false }}/>
            </Stack.Navigator>
            <StatusBar barStyle="light-content" backgroundColor={theme.color.primaryDarkColor} />
        </NavigationContainer>
    );
}