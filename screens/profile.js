import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';

const App = () =>  {
  return (
    <View style={styles.container}>
        
         <Image
            source={require('./images/pnp.png')} 
            style={styles.Logo}
        />

        <Text style={styles.Name} >PLT Rey Mark Engada</Text>
        <Text style={styles.Position} >OIC, Police Station 1</Text>
        <Text style={styles.Address} >Poblacion 1, Dumaguete City</Text>
        <Text style={styles.Number} >09123456789</Text>

        <TouchableOpacity
            style={styles.Button}
            // onPress={onPress}
        >
            {/* <Button title="Call Now" /> */}
            <Text style={styles.ButtonText}>Call Now</Text>
        </TouchableOpacity>
        
        <StatusBar style="auto" />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15233b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Logo:{
      height:250,
      width: 300,
      resizeMode:'contain'
  },
  Name:{
    fontWeight: 'bold',
    fontSize: 25
  },
  Postion:{
    fontWeight: 'bold',
    fontSize: 15
  },
  Address:{
    fontWeight: 'bold',
    fontSize: 15
  },
  Number:{
    fontWeight: 'bold',
    fontSize: 25,
  },
  Button:{
    marginTop:20,
    padding:20,
    backgroundColor: '#41a7f0',
    borderRadius: 30
  },
  ButtonText:{
    fontSize:30,
    fontWeight: 'bold',
  }
});

