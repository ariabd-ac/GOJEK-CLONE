
import React from 'react';


import { createStackNavigator } from '@react-navigation/stack';
import { GoNews, Home, ScanQRCode } from '../../pages';

const Stack = createStackNavigator();

function Route() {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="News" component={GoNews} options={{headerTransparent: true}}/>
        <Stack.Screen name="ScanQRCode" component={ScanQRCode} options={{headerShown: false}}/>
      </Stack.Navigator>
  );
}



export default Route;