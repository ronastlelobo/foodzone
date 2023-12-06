import {StyleSheet} from 'react-native';
import {hp, wp} from '../../utils/PixelRatio';
import {Theme} from '../../utils/Theme';

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('12%'),
    width: '30%',
  },
  img: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },
  restaurantDetailsContainer: {
    height: '100%',
    width: '65%',
  },
  dishName: {fontSize: hp(2), fontFamily: Theme.fonts.bold},
  categoryName: {
    fontSize: hp(1.5),
    fontFamily: Theme.fonts.regular,
  },
  priceText: {
    marginTop: 5,
    fontSize: hp(1.8),
    fontFamily: Theme.fonts.regular,
  },
  cuisineText: {
    marginTop: 5,
    color: Theme.colors.grey,
    fontSize: hp(1.6),
    fontFamily: Theme.fonts.regular,
  },
  quantityContainer: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    maxHeight: hp(3),
  },
  quantityText: {
    fontSize: hp(2),
    fontFamily: Theme.fonts.bold,
    minWidth: wp(8),
    textAlign: 'center',
  },
});
