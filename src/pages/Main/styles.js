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
        // flexDirection: 'row',
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,
        backgroundColor: '#fff',
        borderBottomColor: '#e6ecf0',
        borderBottomWidth: 1,
    },

    eventImageTitle: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
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
        color: '#000',
        fontWeight: 'bold',
    },

    eventDescription: {
        fontSize: 14,
        color: '#000',
        marginTop: 8,
        marginBottom: 24,
        // paddingRight: 10,
        flex: 1,
        flexWrap: 'wrap',
    },

    eventData: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#41414d',
        marginBottom: 5,
        fontSize: 12,
        // marginRight: 90,
    },

    eventDataText: {
        fontSize: 12,
        color: '#41414d',
    },

    eventFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
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
        justifyContent: 'flex-end',
        alignItems: 'center',
        // paddingRight: 40,
    },

    detailsButtonText: {
        color: '#E02041',
        fontSize: 15,
        fontWeight: 'bold',
    },

    flexRow: {
        flexDirection: 'row',
    },

    profileImage: {
        width: 35, 
        height: 35,        
        padding: 0,
        // marginRight: 10,
        borderRadius: 50,
    },


});