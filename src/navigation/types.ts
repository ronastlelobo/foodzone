import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigatorScreenParams} from '@react-navigation/native';

export type MainStackNavigatorParamList = {
  LoginStackNavigator: NavigatorScreenParams<LoginStackNavigatorParamList>;
  HomeStackNavigator: NavigatorScreenParams<HomeStackNavigatorParamList>;
  MenuStackNavigator: NavigatorScreenParams<MenuStackNavigatorParamList>;
  CheckoutStackNavigator: NavigatorScreenParams<CheckoutStackNavigatorParamList>;
};

export type MainStackNavigationProp =
  NativeStackScreenProps<MainStackNavigatorParamList>;

export type LoginStackNavigatorParamList = {
  Login: undefined;
};

export type LoginStackNavigationProp =
  NativeStackScreenProps<LoginStackNavigatorParamList>;

export type HomeStackNavigatorParamList = {
  Home: undefined;
};

export type HomeStackNavigationProp =
  NativeStackScreenProps<LoginStackNavigatorParamList>;

export type MenuStackNavigatorParamList = {
  Menu: undefined;
};

export type MenuStackNavigationProp =
  NativeStackScreenProps<LoginStackNavigatorParamList>;

export type CheckoutStackNavigatorParamList = {
  Checkout: undefined;
};

export type CheckoutStackNavigationProp =
  NativeStackScreenProps<LoginStackNavigatorParamList>;
