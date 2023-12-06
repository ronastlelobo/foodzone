import {Platform} from 'react-native';

export default {
  IS_ANDROID: Platform.OS === 'android',
  IS_IOS: Platform.OS === 'ios',
  SCREENS: {
    HOME: 'Home',
    MENU: 'Menu',
    CHECKOUT: 'Checkout',
    LOGIN: 'Login',
  },
  SCREEN_DISABLE_BACK_BUTTTON: ['Home', 'Login'],
  RANDOM_IMG: `https://source.unsplash.com/collection/622228?sig=${Math.floor(
    Math.random() * 100,
  )}`,
};
