import React from 'react';
import { View, Text } from 'react-native';

export default function Preferences() {

    return (
        <View>
            <Text style={{ alignSelf: 'center', padding: 10, fontSize: 15, fontWeight: 'bold' }}>Preferências</Text>
            <Text>
                Ativar notificação
            </Text>
            <Text>
                Ativar alarme
            </Text>
        </View>
    );
}