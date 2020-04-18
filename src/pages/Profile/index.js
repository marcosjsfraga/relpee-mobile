import React, { useState, useEffect } from 'react';
import { View, Image, Text, AsyncStorage, TouchableOpacity, TextInput } from 'react-native';
import api from '../../services/api';
import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import logoImg from '../../assets/LogoText.png';
import styles from './styles';

export default function Profile()  {
    const navigation = useNavigation();
    const [personId, setPersonId] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    // Person vars
    const [id, onChangeId] = useState(0);
    const [name, onChangeName] = useState('');
    const [email_login, onChangeEmailLogin] = useState('');
    const [password, onChangePassword] = useState('');
    const [type, onChangeType] = useState('');
    const [whatsapp, onChangeWhatsapp] = useState('');
    const [city, onChangeCity] = useState('');
    const [state, onChangeState] = useState('');

    AsyncStorage.getItem('@Relpee:imageUrl', (err, result) => {
        setImageUrl(result);
    });   

    useEffect(() => {
        getPerson();
    }, [personId]);

    /**
     * Send to previous page
     */
    function navigateBack() {
        navigation.goBack();
    }
    
    /**
     * Get person from server
     */
    async function getPerson() {

        try {

            let id = await AsyncStorage.getItem("@Relpee:personId");
            setPersonId(id);
    
            const response = await api.get(`person/${personId}`);
    
            // Get person data from response
            var person = response.data;
    
            onChangeId(person.id);
            onChangeName(person.name);
            onChangeEmailLogin(person.email_login);
            onChangePassword(person.password);
            onChangeType(person.type);
            onChangeWhatsapp(person.whatsapp);
            onChangeCity(person.city);
            onChangeState(person.state);
                
        } catch (error) {
            
        }
    }

    /**
     * Login
     */
    async function updateProfile() {
        // Set JSON data
        const data = {
            id, name, email_login, password, type, whatsapp, city, state,
        };

        try {
            // Send data to server
            await api.post('person', data);

            // Send to specific page
            navigation.navigate('Main');

        } catch (error) {
            alert('Error Profile().profileUpdateHandler: ' + error);
        }
    }

    /**
     * Render
     */
    return(
        <View style={styles.container}>

            <View style={styles.header}>
                <Image source={logoImg} />

                <TouchableOpacity style={styles.detailsButton} onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#E02041" />
                </TouchableOpacity>
            </View>

            <View style={styles.content}>
                
                {imageUrl ? <Image style={styles.profileImage} source={{ uri: imageUrl }} />:null}

                <TextInput style={styles.textInput} 
                           placeholder="Nome" 
                           autoFocus={false} 
                           autoCapitalize ='none' 
                           onChangeText={name => onChangeName(name)} 
                           value={name}
                           />

                <TextInput style={styles.textInput} 
                           placeholder="Email" 
                           onChangeText={email_login => onChangeEmailLogin(email_login)} 
                           value={email_login}
                           />

                <TextInput style={styles.textInput} 
                           placeholder="Senha" 
                           secureTextEntry={true} 
                           password={true} 
                           onChangeText={password => onChangePassword(password)} 
                           value={password}
                           />

                <TextInput style={styles.textInput} 
                           placeholder="WhatsApp" 
                           onChangeText={whatsapp => onChangeWhatsapp(whatsapp)} 
                           value={whatsapp}
                           />

                <TextInput style={styles.textInput} 
                           placeholder="Cidade" 
                           onChangeText={city => onChangeCity(city)} 
                           value={city}
                           />

                <TextInput style={styles.textInput} 
                           placeholder="Estado" 
                           onChangeText={state => onChangeState(state)} 
                           value={state}
                           />

                <TouchableOpacity style={styles.salvarButtom} title="Salvar" onPress={updateProfile}>
                    <Text style={styles.salvarButtomText}>Salvar</Text>
                </TouchableOpacity>

            </View>



            

        </View>
    );

}