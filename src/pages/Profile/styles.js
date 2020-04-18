import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: '#fff',
    },

    content: {
        flex: 1,
        flexDirection: 'column',
        alignSelf: 'stretch',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 20,
        paddingHorizontal: 10,
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

    profileImage: {
        width: 150, 
        height: 150,        
        padding: 0,
        borderRadius: 90,
        marginBottom: 30,
    },

    textInput: {
        borderBottomColor: '#999',
        borderBottomWidth:1,
        // borderColor: '#999',
        // borderWidth: 1,
        // borderRadius: 4,
        // padding: 5,
        marginHorizontal: 20,
        marginBottom: 10,
        height: 40,
        alignSelf: 'stretch',
        alignContent: 'center',
        fontSize: 18,
    },

    salvarButtom: {
        fontSize: 18,
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

    salvarButtomText: {
        fontSize: 19,
        color: '#FFF',
    },

    flexRow: {
        flexDirection: 'row',
    },



});