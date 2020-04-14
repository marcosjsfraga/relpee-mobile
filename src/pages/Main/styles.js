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
        marginTop: 36,
        marginBottom: 5,
        color: '#13131a',
    },

    eventList: {
        marginTop: 10,
    },

    event: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: 10,
        backgroundColor: '#fff',
        // marginBottom: 1,
        // borderTopColor: '#e6ecf0',
        // borderTopWidth: 1,
        borderBottomColor: '#e6ecf0',
        borderBottomWidth: 1,
    },

    eventPersonImagem: {
        width: 55, 
        height: 55,        
        padding: 0,
        marginRight: 10,
        borderRadius: 50,
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
        paddingRight: 40,
        // justifyContent: 'space-around'
    },

    eventFooter: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        color: '#41414d',
        marginBottom: 20,

    },

    footerIcon: {
        marginRight:3,
    },

    footerInfo: {
        marginRight:30,
        fontSize: 14,
        color: '#41414d',
    },

    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingRight: 40,
    },

    detailsButtonText: {
        color: '#E02041',
        fontSize: 15,
        fontWeight: 'bold',
    }


});