import React, { useState, useEffect } from 'react';
import { View, FlatList, Image, Text, AsyncStorage, TouchableOpacity, Alert } from 'react-native';
import api from '../../services/api';
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import logoImg from '../../assets/LogoText.png';
import styles from './styles';

export default function Main() {
    const [events, setEvents] = useState([]);
    const navigation = useNavigation();
    const [imageUrl, setImageUrl] = useState('');

    AsyncStorage.getItem('@Relpee:imageUrl', (err, result) => {
        setImageUrl(result);
    });   

    /**
     * ...
     */
    useEffect(() => {
        loadEvents();
    }, []);

    /**
     * Get events from server
     */
    async function loadEvents() {
        // Get person id from internal storage
        const id = await AsyncStorage.getItem("@Relpee:personId");
        // Get events from server
        const response = await api.get(`event/list/${id}`);
        // Set data events 
        setEvents(response.data);
    }

    /**
     * Set participation in event
     */
    async function participate(event) {
        Alert.alert(
            '',
            'Confirma a participação nesta ação?',
            [
                {
                    text: 'Sim', 
                    onPress: async () => {
                        // Get person id from internal storage
                        const id = await AsyncStorage.getItem("@Relpee:personId");
                        // Set person as a participant of the event
                        await api.post(`event/participate/${event.id}/${id}/`);
                        // Show message
                        Alert.alert('', 'Parabéns por decidir fazer diferença na vida de outras pessoas.\n ;-D');
                        // Reload events
                        loadEvents();
                    }},
                {
                    text: 'Não',
                    // onPress: () => console.log('Cancel Pressed'),
                    // style: 'cancel',
                },
            ],
            {cancelable: false},
        );
    }

    /**
     * Unset participation in event
     */
    async function unparticipate(event) {
        Alert.alert(
            '',
            'Confirma o cancelamento de sua participação nesta ação?',
            [
                {
                    text: 'Sim', 
                    onPress: async () => {
                        // Get person id from internal storage
                        const id = await AsyncStorage.getItem("@Relpee:personId");
                        // Unset person as a participant of the event
                        await api.post(`event/unparticipate/${event.id}/${id}/`);
                        // Show message
                        Alert.alert('', 'Que pena, vamos sentir sua falta.\n :-(');
                        // Reload events
                        loadEvents();
                    }},
                {
                    text: 'Não',
                    // onPress: () => console.log('Cancel Pressed'),
                    // style: 'cancel',
                },
            ],
            {cancelable: false},
        );

    }

    /**
     * Send to event details page
     */
    function navigateToDetail(event) {
        navigation.navigate('EventDetail', { event });
    }

    /**
     * Send to event profile page
     */
    function navigateToProfile() {
        navigation.navigate('Profile');
    }

    /**
     * Render
     */
    return(
        <View style={styles.container}>
            
            <View style={styles.header}>
                <Image source={logoImg} />
                {imageUrl ? 
                <TouchableOpacity onPress={() => navigateToProfile()}>
                    <Image style={styles.profileImage} source={{ uri: imageUrl }} />
                </TouchableOpacity>
                :null}
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
                                <TouchableOpacity style={styles.eventTitle} onPress={() => navigateToDetail(event)}>
                                    <Text style={styles.eventTitle}>{event.title}</Text>
                                </TouchableOpacity>

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
                                <TouchableOpacity style={styles.detailsButton} onPress={() => navigateToDetail(event)}>
                                    <Text style={styles.eventDescription}>{event.description}</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.eventFooter}>
                                {/* Messages */}
                                <View style={styles.flexRow}>
                                    <Feather name="message-square" size={20} color="#3498DB" style={styles.footerIcon} />
                                    <Text style={styles.footerInfo}>0</Text>
                                </View>
                                {/* Members */}
                                <View style={styles.flexRow}>
                                    <Feather name="user" size={20} color="#3498DB" style={styles.footerIcon} />
                                    <Text style={styles.footerInfo}>{event.participants.length}</Text>
                                </View>
                                {/* - Participate Button - */}
                                <View style={styles.flexRow}>
                                    {event.person_participates === false ? <TouchableOpacity onPress={() => participate(event)}><FontAwesome5 name="hand-holding-heart" color="#AAA" size={22}/></TouchableOpacity>
                                    :<TouchableOpacity onPress={() => unparticipate(event)}><FontAwesome5 name="hand-holding-heart" color="#d9534f" size={22}/></TouchableOpacity>}
                                </View>
                            </View>

                            {/* <TouchableOpacity style={styles.detailsButton} onPress={() => navigateToDetail(event)}>
                                <Text style={styles.detailsButtonText}>Ver detalhes</Text>
                                <MaterialIcons name="pageview" size={16} color="#E02041" />
                            </TouchableOpacity> */}
                        </View>
                    </View>
                    
                )}
            />
 
        </View>
    );
}
