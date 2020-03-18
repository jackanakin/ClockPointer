import React from 'react';
import { View, Text } from 'react-native';

export default function MyData() {

    return (
        <View>
            <Text style={{ alignSelf: 'center', padding: 10, fontSize: 15, fontWeight: 'bold' }}>Meus Dados</Text>
            <Text>
                Nome: Jardel Kuhn
            </Text>
            <Text>
                Empregador: BrasRede Telecomunicações LTDA
            </Text>
            <Text>
                Horário: ....
            </Text>
        </View>
    );
}