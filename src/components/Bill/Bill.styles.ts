import {StyleSheet} from 'react-native';
import {hp} from '../../utils/PixelRatio';
import {Theme} from '../../utils/Theme';

export const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Theme.colors.green100,
    borderColor: Theme.colors.green900,
    borderWidth: 1,
    borderRadius: 5,
  },
  totalText: {
    paddingVertical: 10,
    fontFamily: Theme.fonts.bold,
    fontSize: hp(2),
    color: Theme.colors.black,
  },
});
