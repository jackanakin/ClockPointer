import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { StatusBar } from 'react-native';

import theme from './global/theme'

import { store, persistor } from './store';
import Routes from './routes'
import SignIn from './screens/SignIn'
import SignUp from './screens/SignUp'
const Stack = createStackNavigator();

export default function App() {
    const authenticated = false;

    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>

                <NavigationContainer>
                    <Stack.Navigator initialRouteName="SignIn">
                        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
                        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
                        <Stack.Screen name="Routes" component={Routes} options={{ headerShown: false }} />
                    </Stack.Navigator>
                    <StatusBar barStyle="light-content" backgroundColor={theme.color.primaryDarkColor} />
                </NavigationContainer>

            </PersistGate>
        </Provider>
    );
}
