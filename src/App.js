
import React from 'react';
import {
  ScrollView,
  View,
} from 'react-native';
import Route from './config/router';
import { NavigationContainer } from '@react-navigation/native';



const App = () => {
  return (
    <NavigationContainer>
      <Route/>
      </NavigationContainer>
  );
};

export default App;
