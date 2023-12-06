import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  HomeStackNavigatorParamList,
  LoginStackNavigatorParamList,
  MainStackNavigatorParamList,
  MenuStackNavigatorParamList,
  CheckoutStackNavigatorParamList,
} from './types';
import Login from '../screens/Login/Login';
import Home from '../screens/Home/Home';
import Menu from '../screens/Menu/Menu';
import Checkout from '../screens/Checkout/Checkout';

export default function RootNavigator() {
  const MainStack = createNativeStackNavigator<MainStackNavigatorParamList>();
  const LoginStack = createNativeStackNavigator<LoginStackNavigatorParamList>();
  const HomeStack = createNativeStackNavigator<HomeStackNavigatorParamList>();
  const MenuStack = createNativeStackNavigator<MenuStackNavigatorParamList>();
  const CheckoutStack =
    createNativeStackNavigator<CheckoutStackNavigatorParamList>();

  const LoginStackNavigator = () => {
    return (
      <LoginStack.Navigator
        screenOptions={{
          headerShown: false,
          headerTransparent: true,
        }}>
        <LoginStack.Screen name="Login" component={Login} />
      </LoginStack.Navigator>
    );
  };

  const HomeStackNavigator = () => {
    return (
      <HomeStack.Navigator
        screenOptions={{
          headerShown: false,
          headerTransparent: true,
        }}>
        <HomeStack.Screen name="Restaurants" component={Home} />
      </HomeStack.Navigator>
    );
  };

  const MenuStackNavigator = () => {
    return (
      <MenuStack.Navigator
        screenOptions={{
          headerShown: false,
          headerTransparent: true,
        }}>
        <MenuStack.Screen name="Menu" component={Menu} />
      </MenuStack.Navigator>
    );
  };

  const CheckoutStackNavigator = () => {
    return (
      <CheckoutStack.Navigator
        screenOptions={{
          headerShown: false,
          headerTransparent: true,
        }}>
        <CheckoutStack.Screen name="Checkout" component={Checkout} />
      </CheckoutStack.Navigator>
    );
  };

  const MainStackNavigator = () => {
    return (
      <MainStack.Navigator
        screenOptions={{
          headerShown: false,
          headerTransparent: true,
        }}>
        <MainStack.Screen
          name="LoginStackNavigator"
          component={LoginStackNavigator}
        />
        <MainStack.Screen
          name="HomeStackNavigator"
          component={HomeStackNavigator}
        />
        <MainStack.Screen
          name="MenuStackNavigator"
          component={MenuStackNavigator}
        />
        <MainStack.Screen
          name="CheckoutStackNavigator"
          component={CheckoutStackNavigator}
        />
      </MainStack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
}
