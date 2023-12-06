import {StyleSheet} from 'react-native';
import {hp, wp} from '../../utils/PixelRatio';
import AppConstants from '../../utils/AppConstants';
import {Theme} from '../../utils/Theme';

export const styles = StyleSheet.create({
  container: {
    minHeight: hp('7%'),
    width: '100%',
    justifyContent: 'center',
  },
  backImgStyle: {
    width: '15%',
  },
  saveText: {
    fontFamily: Theme.fonts.bold,
    fontSize: hp(1.8),
    color: Theme.colors.primary,
  },
  defaultHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    // backgroundColor: 'red',
  },
  defaultHeaderText: {
    fontSize: hp(2),
    fontFamily: Theme.fonts.regular,
    color: Theme.colors.black,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '70%',
  },
  homeHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    ...(AppConstants.IS_ANDROID && {paddingVertical: 10}),
  },
  homeTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '60%',
  },
});
