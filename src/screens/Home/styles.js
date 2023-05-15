import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    list: {
        paddingHorinzontal: 20,
        flexGrow: 1,
        width: '100%'
    },
    
    listItem:{
        backgroundColor:'#eee',
        marginTop: 20,
        padding: 30,
    },

    loading: {
        alignSelf: 'center',
        marginVertical: 20,
    },
    searchField: {
        flex: 2,
        color: '#e84393',
        fontSize:20,
        borderColor: '#dfe6e9',
        borderRadius:8,
        borderWidth: 1,
        padding: 8,
    },
    containerSearch: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap:10,
        marginTop:30,
    },
    button: {
        flex:1,
        borderColor: '#dfe6e9',
        borderRadius:8,
        borderWidth: 1,
        padding: 8,
    },
    textSearchButton: {
        fontSize:18,
        color: '#e84393',
        textAlign: 'center',
    },
    containerDataIsEmpty: {
        height:'100%',
        width:'100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dataIsEmpty: {
        textAlign: 'center',
        fontSize: 20,
        color: '#e84393',
        
    }
});