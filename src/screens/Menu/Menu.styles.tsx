import {StyleSheet} from 'react-native';
import {Theme} from '../../utils/Theme';
import {hp} from '../../utils/PixelRatio';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerContent: {
    flexGrow: 1,
    padding: 20,
  },
  restaurantSeperator: {
    height: 1,
    width: '100%',
    backgroundColor: Theme.colors.grey,
    marginBottom: 10,
  },
  sectionHeaderContainer: {
    height: hp(5),
    width: '100%',
    paddingHorizontal: 10,
    justifyContent: 'center',
    backgroundColor: '#f8f4f4',
    borderRadius: 5,
  },
  sectionTitle: {
    fontFamily: Theme.fonts.bold,
    fontSize: hp(2),
  },
});
