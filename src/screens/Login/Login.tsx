import React, {useMemo, useEffect} from 'react';
import {View, ImageBackground, StatusBar, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import ImageLib from '../../utils/ImageLib';
import {hp} from '../../utils/PixelRatio';
import {styles} from './Login.styles';
import Button from '../../components/Button/Button';

const Login = (): JSX.Element => {
  const insets = useSafeAreaInsets();
  const login = () => {};
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
            <Button onPress={login} label="Auto Login" />
            <Button onPress={login} label="Login with Mobile Number" />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;
