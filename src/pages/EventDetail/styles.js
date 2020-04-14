import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: '#fff',
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 10,
        borderBottomColor: '#d9d9d9',
        borderBottomWidth: 1,
    },

    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 16,
        marginTop: 36,
        color: '#13131a',
    },

    event: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16,
    },

    eventTitle: {
        fontSize: 16,
        color: '#41414d',
        fontWeight: 'bold',
    },

    eventDescription: {
        fontSize: 14,
        color: '#41414d',
        marginTop: 8,
        marginBottom: 24,
    },

});