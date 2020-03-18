import React from 'react';
import { View, Text } from 'react-native';

export default function LastFeed() {

    return (
        <View>
            <Text style={{ alignSelf: 'center', padding: 10, fontSize: 15, fontWeight: 'bold' }}>Atividades Recentes</Text>
            <Text>
                Bateu ponto 01/01/2020 8:15
            </Text>
            <Text>
                Bateu ponto 01/01/2020 11:45
            </Text>
            <Text>
                Bateu ponto 01/01/2020 13:30
            </Text>
            <Text>
                Bateu ponto 01/01/2020 18:15
            </Text>
            <Text>
                Bateu ponto 02/01/2020 8:15
            </Text>
        </View>
    );
}