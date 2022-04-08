import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/home.js';
import ContactList from './screens/contacts.js';
import Profile from './screens/profile.js';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome Butuanon(s)' }}
        />
         <Stack.Screen
          name="ContactList"
          component={ContactList}
          options={{ title: 'Emergency Hotlines' }}
        />
         <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ title: 'Contact Profile' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
