import {StyleSheet} from 'react-native';
import {hp, wp} from '../../utils/PixelRatio';
import AppConstants from '../../utils/AppConstants';
import {Theme} from '../../utils/Theme';

export const styles = StyleSheet.create({
  container: {
    minHeight: hp('10%'),
    padding: 10,
    width: '100%',
    justifyContent: 'center',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: Theme.colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
