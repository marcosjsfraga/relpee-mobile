import React from 'react';
import { View, Image, Text } from 'react-native';

import logoImg from '../../assets/LogoText.png';

import styles from './styles';

export default function Main() {
    return(
        <View style={styles.container}>

            <View style={styles.header}>
                <Image source={logoImg} />
                {/* <Text style={styles.headerText}>
                    Ações
                </Text> */}
            </View>
        
            <Text style={styles.title}>
                Ações
            </Text>

            <View style={styles.eventList}>
                <View style={styles.event}>
                    <Text style={styles.eventProperty}>Distrbuição de Sopão</Text>
                    <Text style={styles.eventValue}>AÇÃO:</Text>
                </View>

            </View>

        </View>
    );
}
