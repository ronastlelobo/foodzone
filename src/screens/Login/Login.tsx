import React, {useMemo, useEffect} from 'react';
import {View, ImageBackground, StatusBar, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import ImageLib from '../../utils/ImageLib';
import {hp} from '../../utils/PixelRatio';
import {styles} from './Login.styles';

const Login = (): JSX.Element => {
  const insets = useSafeAreaInsets();
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
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;
