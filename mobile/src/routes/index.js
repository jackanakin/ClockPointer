import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { MyBackground, NameTitle } from './styles'

const Tab = createMaterialTopTabNavigator();
import Resume from '../screens/Resume'
import LastFeed from '../screens/LastFeed'
import Preferences from '../screens/Preferences'
import MyData from '~/screens/MyData'

export default function Routes() {
    return (
        <MyBackground>
            <NameTitle>Jardel Kuhn</NameTitle>
            <Tab.Navigator lazy tabBarOptions={{ style: styles.navigator }}>
                <Tab.Screen name="Resume" component={Resume} />
                <Tab.Screen name="LastFeed" component={LastFeed} />
                <Tab.Screen name="Preferences" component={Preferences} />
                <Tab.Screen name="MyData" component={MyData} />
            </Tab.Navigator>
        </MyBackground>
    );
}

const styles = StyleSheet.create({
    navigator: {
        width: 0, height: 0
    },
});