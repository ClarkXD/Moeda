import { View, Text, StyleSheet,TextInput, Button } from 'react-native';
import Component from './componete';

export default function App(){
  return(
    <View style={styles.central}>

      <Text style={styles.titulo}>Sistema Conversor de Moedas</Text>
        <Component/>
    </View>
  );
};

// Aqui começa os estilos

const styles = StyleSheet.create({

  central:{
    flex: 1,
    backgroundColor:'gray',
    alignItems:'center',
    justifyContent:"center", 
  },
  titulo:{
    fontSize:25,
    color:'white'
  },
  
})

