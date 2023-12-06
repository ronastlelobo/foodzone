import React, {useMemo, useEffect} from 'react';
import {View, ImageBackground, StatusBar, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import ImageLib from '../../utils/ImageLib';
import {hp} from '../../utils/PixelRatio';
import {styles} from './Login.styles';
import Button from '../../components/Button/Button';
import useAuth from '../../hooks/useAuth';
import {MainStackNavigationProp} from '../../navigation/types';

const Login = (): JSX.Element => {
  const navigation = useNavigation<MainStackNavigationProp>();
  const insets = useSafeAreaInsets();
  const {autoSignIn, onGoogleButtonPress} = useAuth();
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#000'} />
      <ImageBackground
        source={ImageLib.loginBg}
        resizeMode="cover"
        style={styles.container}>
        <View style={styles.imageBgContainer}>
          <View style={[styles.header, {paddingTop: hp('0.8%') + insets.top}]}>
            <Text style={styles.headerText}>Foodzone</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button onPress={autoSignIn} label="Auto Login" />
            <Button
              onPress={onGoogleButtonPress}
              label="Login with Mobile Number"
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;
