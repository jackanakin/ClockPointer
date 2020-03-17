import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { View, Text, StatusBar } from 'react-native';

import theme from './global/theme'

import Routes from './routes'

export default function App() {

    return (
        <NavigationContainer>
            <Routes />
            <StatusBar barStyle="light-content" backgroundColor={theme.color.primaryDarkColor} />
        </NavigationContainer>
    );
}