import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Components/homePage';
import SecondScreen from './Components/SecondScreen';
import ThirdScreen from './Components/ThirdScreen';
import Name from './Components/Name';
import Email from './Components/Email';
import DOB from './Components/DOB';
import refralCode from './Components/RefralCode';
import AsyncStorage from "@react-native-async-storage/async-storage";
import  Dashboard from './Components/Dashboard';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" options={{headerShown:false,animation:'fade'}} component={HomeScreen} />
        <Stack.Screen name="SecondScreen" options={{headerShown:false,animation:'slide_from_right'}} component={SecondScreen} />
        <Stack.Screen name="ThirdScreen" options={{headerShown:false,animation:'slide_from_right'}} component={ThirdScreen} />
        <Stack.Screen name="Email" options={{headerShown:false,animation:'slide_from_right'}} component={Email} />
        <Stack.Screen name="Name" options={{headerShown:false,animation:'slide_from_right'}} component={Name} />
        <Stack.Screen name="DOB" options={{headerShown:false,animation:'slide_from_right'}} component={DOB} />
        <Stack.Screen name="refralCode" options={{headerShown:false,animation:'slide_from_right'}} component={refralCode} />
        <Stack.Screen name="Dashboard" options={{headerShown:false,animation:'slide_from_right'}} component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;