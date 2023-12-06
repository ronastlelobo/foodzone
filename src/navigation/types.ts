import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigatorScreenParams} from '@react-navigation/native';

export type MainStackNavigatorParamList = {
  goBack(): unknown;
  navigate(arg0: string): unknown;
  LoginStackNavigator: NavigatorScreenParams<LoginStackNavigatorParamList>;
  HomeStackNavigator: NavigatorScreenParams<HomeStackNavigatorParamList>;
  MenuStackNavigator: NavigatorScreenParams<MenuStackNavigatorParamList>;
  CheckoutStackNavigator: NavigatorScreenParams<CheckoutStackNavigatorParamList>;
};

export type MainStackNavigationProp =
  NativeStackNavigationProp<MainStackNavigatorParamList>;

export type LoginStackNavigatorParamList = {
  Login: undefined;
};

export type LoginStackNavigationProp =
  NativeStackNavigationProp<LoginStackNavigatorParamList>;

export type HomeStackNavigatorParamList = {
  Home: undefined;
};

export type HomeStackNavigationProp =
  NativeStackNavigationProp<LoginStackNavigatorParamList>;

export type MenuStackNavigatorParamList = {
  Menu: undefined;
};

export type MenuStackNavigationProp =
  NativeStackNavigationProp<LoginStackNavigatorParamList>;

export type CheckoutStackNavigatorParamList = {
  Checkout: undefined;
};

export type CheckoutStackNavigationProp =
  NativeStackNavigationProp<LoginStackNavigatorParamList>;
