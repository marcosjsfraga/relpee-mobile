import React from 'react';
import { View, Image, Text, AsyncStorage, TouchableOpacity, TextInput, Keyboard, Alert} from 'react-native';
import api from '../../services/api';
import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation, componentDidMount } from '@react-navigation/native';
import logoImg from '../../assets/LogoTextLogin.png';
import styles from './styles';

// https://blog.rocketseat.com.br/fluxo-de-autenticacao-com-react-native/

export default function Login() {
    const [email_login, onChangeEmailLogin] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    const navigation = useNavigation();
    let personId = '';

    async function componentDidMount() {
        personId = await AsyncStorage.getItem("@Relpee:personId");

        console.log('personId:' + personId);

        if (personId !== '') 
            navigation.navigate('Main');
    }

    /**
     * Login
     */
    async function loginHandler() {
        try {

            // Validate account
            const response = await api.post('session/validate', { email_login, password });
            // Close virtual keyboard
            Keyboard.dismiss();
            // Persist data in internal storage
            await AsyncStorage.setItem("@Relpee:personId", response.data.personId.toString());
            await AsyncStorage.setItem('@Relpee:personName', response.data.personName);
            await AsyncStorage.setItem('@Relpee:imageUrl', response.data.imageUrl);
            await AsyncStorage.setItem('@Relpee:personAddress', response.data.personAddress);

            // Send to specific page
            navigation.navigate('Main');

        } catch (error) {
            // alert('Falha no login');
            Alert.alert('Email ou senha inválidos.');
            console.log('Email ou senha inválidos.' + error);
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
                           autoFocus={false} 
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