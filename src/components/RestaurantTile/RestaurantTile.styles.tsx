import {StyleSheet} from 'react-native';
import {hp} from '../../utils/PixelRatio';
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
  restaurantName: {fontSize: hp(2), fontFamily: Theme.fonts.bold},
  neighbourhoodText: {
    fontSize: hp(1.5),
    fontFamily: Theme.fonts.regular,
  },
  cuisineText: {
    marginTop: 5,
    color: Theme.colors.grey,
    fontSize: hp(1.6),
    fontFamily: Theme.fonts.regular,
  },
  locationContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  paramContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  paramText: {
    fontFamily: Theme.fonts.regular,
    color: Theme.colors.grey,
  },
  starImg: {
    maxHeight: hp(2),
    tintColor: Theme.colors.grey,
    marginBottom: 4,
  },
  locationImg: {
    maxHeight: hp(2),
    transform: [{rotate: '45deg'}],
    tintColor: Theme.colors.grey,
    marginBottom: 4,
  },
});
