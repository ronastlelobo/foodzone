import {StyleSheet} from 'react-native';
import {hp} from '../../utils/PixelRatio';
import {Theme} from '../../utils/Theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBgContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
  header: {},
  headerText: {
    fontSize: hp(4),
    color: Theme.colors.white,
    fontFamily: Theme.fonts.bold,
    letterSpacing: 1,
  },
});
