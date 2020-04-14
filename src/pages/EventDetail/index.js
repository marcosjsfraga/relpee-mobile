import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from './styles';
import logoImg from '../../assets/LogoText.png';

export default function EventDetail() {
    const navigation = useNavigation();
    const route = useRoute();
    const event = route.params.event;

    /**
     * Send to previous page
     */
    function navigateBack() {
        navigation.goBack();
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
        
            <Text style={styles.title}>
                Detalhes
            </Text>

            <View style={styles.event} >

                <Text style={styles.eventTitle}>{event.title}</Text>
                <Text style={styles.eventDescription}>{event.description}</Text>

            </View>

        </View>
    );

}