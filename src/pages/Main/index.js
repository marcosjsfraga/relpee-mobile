import React, { useState, useEffect } from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import api from '../../services/api';
import { Feather } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import logoImg from '../../assets/LogoText.png';
import styles from './styles';

export default function Main() {
    const [events, setEvents] = useState([]);
    const personId = 1;
    const navigation = useNavigation();

    /**
     * ...
     */
    useEffect(() => {
        loadEvents();
    }, []);

    /**
     * Send to event details page
     */
    function navigateToDetail(event) {
        navigation.navigate('EventDetail', { event });
    }

    /**
     * Get events from server
     */
    async function loadEvents() {
        const response = await api.get(`event/list/${personId}`);
        setEvents(response.data);
    }

    /**
     * Render
     */
    return(
        <View style={styles.container}>

            <View style={styles.header}>
                <Image source={logoImg} />
            </View>
        
            {/* <Text style={styles.title}>
                Ações
            </Text> */}

            <FlatList 
                data={events} 
                keyExtractor={event => String(event.id)}
                style={styles.eventList}
                showsVerticalScrollIndicator={false}
                renderItem={({ item: event }) => (
                    
                    <View style={styles.event}>
                        <View>  
                            <Image style={styles.eventPersonImagem} source={{ uri: event.person.image_url }} />
                        </View>

                        <View>
                            <Text style={styles.eventTitle}>{event.title}</Text>
                            <Text style={styles.eventDescription}>{event.description}</Text>

                            <View style={styles.eventFooter}>
                                {/* Mensagens */}
                                <Feather name="message-square" size={18} color="#3498DB" style={styles.footerIcon} />
                                <Text style={styles.footerInfo}>0</Text>
                                {/* Participantes */}
                                <Feather name="user" size={18} color="#3498DB" style={styles.footerIcon} />
                                <Text style={styles.footerInfo}>{event.participants.length}</Text>
                                {/* Participantes */}
                                <Feather name="calendar" size={18} color="#3498DB" style={styles.footerIcon} />
                                <Text style={styles.footerInfo}>{new Date(event.start_date).toLocaleDateString()} {event.start_time.toString().substring(0, 5)}</Text>
                            </View>

                            <TouchableOpacity style={styles.detailsButton} onPress={() => navigateToDetail(event)}>
                                <Text style={styles.detailsButtonText}>Ver detalhes</Text>
                                <Feather name="arrow-right" size={16} color="#E02041" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    
                )}
            />
 
        </View>
    );
}
