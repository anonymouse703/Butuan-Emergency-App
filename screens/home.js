import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';

const App = ({navigation}) =>  {
  return (
    <View style={styles.container}>
      <Text style={styles.appTitle} >Butuan Emergency App</Text>
      <Image
        source={require('./images/bxu.png')} 
        style={{height:400, width:400}}
       />
      <Button
        title="Get Emergency Contacts"
        onPress={() => navigation.navigate('ContactList')}
      />
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
  appTitle:{
    fontWeight: 'bold',
    fontSize: 30
  },
});

