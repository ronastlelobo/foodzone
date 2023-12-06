import {Platform} from 'react-native';

export default {
  IS_ANDROID: Platform.OS === 'android',
  IS_IOS: Platform.OS === 'ios',
  SCREENS: {
    RESTAURANTS: 'Restaurants',
    MENU: 'Menu',
    CHECKOUT: 'Checkout',
    LOGIN: 'Login',
  },
  SCREEN_DISABLE_BACK_BUTTTON: ['Restaurants', 'Login'],
  RANDOM_IMG: `https://source.unsplash.com/collection/622228?sig=${Math.floor(
    Math.random() * 100,
  )}`,
  MY_LOCATION: {
    LAT: 40.7831,
    LON: 73.9712,
  },
};
