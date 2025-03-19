import {Text,View,TextInput, Button, StyleSheet } from 'react-native';
import React from 'react';

export default function Component(){
    return(
        <View style = {styles.caixa}>

            <Text style={styles.ctitle}>Valor:</Text>
            <TextInput style={styles.cinput} 
                keyboardType='numeric'
            />
            <Button 
                title='Converter'
            />

        </View>
    );
}

const styles = StyleSheet.create({
    caixa:{
        backgroundColor: 'white',
        width: '70%',
        padding:20,
        borderRadius:20,
        marginTop:20,
    },
    ctitle:{
        fontSize:20,
        fontWeight:'bold',
        color:'#2196F3',
    },
    cinput:{
        width:'100%',
        borderWidth:1,
        borderColor:'#2196F3',
        marginBottom:15,
        marginTop:5,
        borderRadius:5,
    },
})