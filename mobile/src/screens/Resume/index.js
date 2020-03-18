import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MapView from 'react-native-maps';

import theme from '../../global/theme'

export default function Resume() {

    return (
        <View style={styles.wrapper}>
            <Text style={styles.statusBar}>
                <Icon name="assignment-turned-in" size={30} color={theme.color.primaryTextColor} />
            EM EXPEDIENTE
    </Text>
            <Text>Rua Theobaldo Kaffer 236 - Centro
            Arroio do Meio - RS
                95940-000</Text>
                <Text>
                    Horário:
                </Text>
                <Text>
                    Seg. a Sex.: 8:15-11:45 13:30-18:15
                </Text>
                <Text>Sáb.: 8:15-11:55</Text>
            <MapView
                style={styles.map}
                loadingEnabled={true}
                region={{
                    latitude: -29.398015,
                    longitude: -51.947962,
                    latitudeDelta: 0.001,
                    longitudeDelta: 0.001,
                }}
            >
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: { flex: 1 },
    statusBar: {
        alignSelf: 'center',
        padding: 15
    },
    map: {
        flex: 1,
    }
});