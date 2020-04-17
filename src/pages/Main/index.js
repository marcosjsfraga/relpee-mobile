import React, { useState, useEffect } from 'react';
import { View, FlatList, Image, Text, AsyncStorage, TouchableOpacity } from 'react-native';
import api from '../../services/api';
import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import logoImg from '../../assets/LogoText.png';
import styles from './styles';

export default function Main() {
    const [events, setEvents] = useState([]);    
    const navigation = useNavigation();
    let personId = '';

    AsyncStorage.getItem('@Relpee:personId', (err, result) => {
        personId = result;
    });         

    /**
     * ...
     */
    useEffect(() => {
        loadEvents();
    }, []);

    /**
     * Set participation in event
     */
    async function participate(event) {
        const response = await api.post(`event/participate/${event.id}/${personId}/`);
        loadEvents();
    }

    /**
     * Unset participation in event
     */
    async function unparticipate(event) {
        const response = await api.post(`event/unparticipate/${event.id}/${personId}/`);
        loadEvents();
    }

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
        personId = await AsyncStorage.getItem("@Relpee:personId");

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
        
            <FlatList 
                data={events} 
                keyExtractor={event => String(event.id)}
                style={styles.eventList}
                showsVerticalScrollIndicator={false}
                renderItem={({ item: event }) => (
                    
                    <View style={styles.event}>
                        
                        <View style={styles.eventImageTitle}>
                            {/* Image */}
                            <Image style={styles.eventPersonImagem} source={{ uri: event.person.image_url }} />
                            <View>
                                {/* Title */}
                                <Text style={styles.eventTitle}>{event.title}</Text>
                                <View style={styles.eventData}>
                                {/* Participantes */}
                                <View style={styles.flexRow}>
                                    <Feather name="calendar" size={16} color="#3498DB" style={styles.footerIcon} />
                                    <Text style={styles.eventDataText}>{new Date(event.start_date).toLocaleDateString()} {event.start_time.toString().substring(0, 5)}</Text>
                                </View>
                                <Text style={styles.eventDataText}> Por {event.person.name}</Text>
                            </View>

                            </View>
                        </View>
                        
                        <View>
                            {/* Description */}
                            <View>
                                <Text style={styles.eventDescription}>{event.description}</Text>
                            </View>

                            <View style={styles.eventFooter}>
                                {/* Messages */}
                                <View style={styles.flexRow}>
                                    <Feather name="message-square" size={18} color="#3498DB" style={styles.footerIcon} />
                                    <Text style={styles.footerInfo}>0</Text>
                                </View>
                                {/* Members */}
                                <View style={styles.flexRow}>
                                    <Feather name="user" size={18} color="#3498DB" style={styles.footerIcon} />
                                    <Text style={styles.footerInfo}>{event.participants.length}</Text>
                                </View>
                                {/* Participation */}
                                <View style={styles.flexRow}>
                                    {event.person_participates === true ? <Ionicons name="md-heart" size={20} color="#d9534f"/>
                                    :<Ionicons name="md-heart" size={20} color="#ccc"/>}
                                </View>
                                {/* - Participate Button - */}
                                <View style={styles.flexRow}>
                                    {event.person_participates === false ? <TouchableOpacity onPress={() => participate(event)}><Feather name="thumbs-up" color="#3498DB" size={20}/></TouchableOpacity>
                                    :<TouchableOpacity onPress={() => unparticipate(event)}><Feather name="thumbs-down" color="#E02041" size={20}/></TouchableOpacity>}
                                </View>
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
