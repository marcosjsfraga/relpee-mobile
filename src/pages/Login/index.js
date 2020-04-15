import React from 'react';
import { View, Image, Text, AsyncStorage, TouchableOpacity, TextInput } from 'react-native';
import api from '../../services/api';
import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import logoImg from '../../assets/LogoText.png';
import styles from './styles';

// https://blog.rocketseat.com.br/fluxo-de-autenticacao-com-react-native/

export default function Login() {
    const [email_login, onChangeEmailLogin] = React.useState('');
    const [password, onChangePassword] = React.useState('');

    const navigation = useNavigation();

    /**
     * Login
     */
    async function loginHandler() {
        try {
            const response = await api.post('session/validate', { email_login, password });
            // await AsyncStorage.setItem('personId', response.data.personId);
            // await AsyncStorage.setItem('personName', response.data.personName);
            // await AsyncStorage.setItem('imageUrl', response.data.imageUrl);
            // await AsyncStorage.setItem('personAddress', response.data.personAddress);

            // const personId = await AsyncStorage.getItem('personId');
            console.log('--> personId: ' + response.data.personId);
            
            // Send to specific page
            // navigation.navigate('Main');

        } catch (error) {
            // alert('Falha no login');
            console.log('Email ou senha inválida.' + error);
        }
    }


    /**
     * Render
     */
    return(
        <View style={styles.container}>

            <View style={styles.content}>
                
                <Image source={logoImg} style={styles.logo} />

                <TextInput style={styles.textInput} 
                           placeholder="Email" 
                           autoFocus={true} 
                           autoCapitaliz ='none' 
                           onChangeText={email_login => onChangeEmailLogin(email_login)} value={email_login}
                           />

                <TextInput style={styles.textInput} 
                           placeholder="Senha" 
                           secureTextEntry={true} 
                           password={true} 
                           onChangeText={password => onChangePassword(password)} value={password}
                           />

                <TouchableOpacity style={styles.loginButtom} title="Entrar" onPress={loginHandler}>
                    <Text style={styles.loginButtomText}>Entrar</Text>
                </TouchableOpacity>

            </View>

        </View>
    );
}