import React, { useRef, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import {
    Container,
    FormInput,
    Form,
    SubmitButton, MyLoginBackground, SignLink, SignLinkText
} from './styles';

import { signInRequest } from '../../store/modules/auth/actions';

export default function SignIn({ navigation }) {
    const [user, setUser] = useState();
    const [password, setPassword] = useState();
    const passwordRef = useRef();

    const loading = false;//useSelector(state => state.auth.loading);

    function handleSubmit() {
        navigation.navigate('Routes');
    }

    return (
        <MyLoginBackground>
            <Container>
                <Form>
                    <TouchableOpacity>
                        <FormInput
                            icon="mail-outline"
                            keyboardType="email-address"
                            autoCorrect={false}
                            autoCapitalize="words"
                            placeholder="Usuário"
                            returnKeyType="next"
                            value={user}
                            onChangeText={setUser}
                            onSubmitEditing={() => passwordRef.current.focus()}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <FormInput
                            icon="lock-outline"
                            secureTextEntry
                            placeholder="Senha"
                            ref={passwordRef}
                            returnKeyType="send"
                            value={password}
                            onChangeText={setPassword}
                            onSubmitEditing={handleSubmit}
                        />
                    </TouchableOpacity>

                    <SubmitButton loading={loading} onPress={handleSubmit}>Acessar</SubmitButton>
                    <SignLink onPress={() => navigation.navigate('SignUp')}>
                        <SignLinkText>Criar conta</SignLinkText>
                    </SignLink>
                </Form>
            </Container>
        </MyLoginBackground>
    );
}