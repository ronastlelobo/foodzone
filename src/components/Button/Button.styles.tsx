import {StyleSheet} from 'react-native';
import {hp} from '../../utils/PixelRatio';
import {Theme} from '../../utils/Theme';

export const styles = StyleSheet.create({
  doneBtn: {
    backgroundColor: Theme.colors.white,
    height: hp('6.8%'),
    width: '100%',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontSize: hp(1.8),
    fontFamily: Theme.fonts.bold,
  },
});
