import React, {useMemo} from 'react';
import {Text, View, Image, Pressable, SafeAreaView, Alert} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';

import {styles} from './Header.styles';
import ImageLib from '../../utils/ImageLib';
import AppConstants from '../../utils/AppConstants';
import {MainStackNavigatorParamList} from '../../navigation/types';

const Header = () => {
  const route = useRoute();
  const navigation = useNavigation<MainStackNavigatorParamList>();

  const HeaderUI = () => {
    const title = route.name;
    switch (route.name) {
      default:
        return (
          <SafeAreaView>
            <View style={styles.defaultHeaderContainer}>
              <Pressable
                onPress={() => {
                  navigation.goBack();
                }}
                hitSlop={5}
                style={[styles.backImgStyle, {alignItems: 'center'}]}>
                {!AppConstants.SCREEN_DISABLE_BACK_BUTTTON.includes(title) && (
                  <Image source={ImageLib.backIcon} resizeMode="contain" />
                )}
              </Pressable>
              <View style={styles.titleContainer}>
                <Text style={styles.defaultHeaderText}>{title}</Text>
              </View>
              <Pressable
                onPress={() => {
                  navigation.navigate('CheckoutStackNavigator');
                }}
                style={[styles.backImgStyle, {alignItems: 'center'}]}>
                {!AppConstants.SCREENS.CHECKOUT.includes(title) && (
                  <Image source={ImageLib.cartIcon} resizeMode="contain" />
                )}
              </Pressable>
            </View>
          </SafeAreaView>
        );
    }
  };

  return <View style={styles.container}>{HeaderUI()}</View>;
};

export default Header;
