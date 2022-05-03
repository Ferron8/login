import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../../src/screens/SignInScreen';
import SignUpScreen from '../../src/screens/SignUpScreen';
import ConfirmEmailScreen from '../../src/screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../../src/screens/ForgotPasswordScreen.js/ForgotPassword';
import NewPasswordScreen from '../../src/screens/NewPasswordScreen';


const Stack = createStackNavigator();


const Navigation= () => {
  return (
      <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="ConfirmEmailScreen" component={ConfirmEmailScreen} />
        <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
        <Stack.Screen name="NewPasswordScreen" component={NewPasswordScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  )
};

export default Navigation;