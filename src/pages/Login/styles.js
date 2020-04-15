import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({

    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: '#fff',
    },

    content: {
        flex: 1,
        flexDirection: 'column',
        alignSelf: 'stretch',
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },

    logo: {
        marginBottom: 40,
    },

    textInput: {
        borderBottomColor: '#999',
        borderBottomWidth:1,
        marginHorizontal: 20,
        marginBottom: 10,
        height: 40,
        alignSelf: 'stretch',
        alignContent: 'center',
        fontSize: 16,
    },

    loginButtom: {
        fontSize: 19,
        fontWeight: 'bold',
        marginHorizontal: 20,
        marginTop: 40,
        height: 40,
        color: '#FFF',
        backgroundColor: '#E02041',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        borderRadius: 8,
    },

    loginButtomText: {
        fontSize: 19,
        color: '#FFF',
    },

    flexRow: {
        flexDirection: 'row',
    },

});