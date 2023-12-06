import {Image, ListRenderItem, Text, View, Pressable} from 'react-native';
import {Restaurant} from '../../redux/slice/types';
import {styles} from './RestaurantTile.styles';
import AppConstants from '../../utils/AppConstants';
import {useNavigation} from '@react-navigation/native';
import {useAppDispatch} from '../../redux/hooks';
import {addRestarauntItem} from '../../redux/slice/checkout';
import {MainStackNavigatorParamList} from '../../navigation/types';
import {useMemo} from 'react';
import ImageLib from '../../utils/ImageLib';
import {haversineDistanceBetweenPoints} from '../../utils/CommonFunctions';

export const RestaurantTile: ListRenderItem<Restaurant> = ({item}) => {
  const navigation = useNavigation<MainStackNavigatorParamList>();
  const dispatch = useAppDispatch();
  const img = useMemo(() => {
    return `https://source.unsplash.com/collection/622228?sig=${Math.floor(
      Math.random() * 100,
    )}`;
  }, []);

  const onSelect = () => {
    dispatch(addRestarauntItem(item));
    navigation.navigate('MenuStackNavigator');
  };

  return (
    <Pressable
      onPress={onSelect}
      key={item.id.toString()}
      style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={{uri: img}} style={styles.img} resizeMode="cover" />
      </View>
      <View style={styles.restaurantDetailsContainer}>
        <Text style={styles.restaurantName}>{item.name}</Text>
        <Text style={styles.neighbourhoodText}>{item.neighborhood}</Text>
        <Text style={styles.neighbourhoodText}>{item.address}</Text>
        <Text style={styles.cuisineText}>{item.cuisine_type}</Text>
        <View style={styles.locationContainer}>
          <Text style={styles.distText}>
            {haversineDistanceBetweenPoints(
              item.latlng.lat,
              item.latlng.lng,
              AppConstants.MY_LOCATION.LAT,
              AppConstants.MY_LOCATION.LON,
            )}{' '}
            KM
          </Text>
          <Image
            source={ImageLib.navigationIcon}
            style={styles.locationImg}
            resizeMode="contain"
          />
        </View>
      </View>
    </Pressable>
  );
};
