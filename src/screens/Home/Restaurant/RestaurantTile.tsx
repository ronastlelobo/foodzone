import {Image, ListRenderItem, Text, View, Pressable} from 'react-native';
import {Restaurant} from '../../../redux/slice/types';
import {styles} from './RestaurantTile.styles';
import AppConstants from '../../../utils/AppConstants';
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../../redux/hooks';
import {
  addRestarauntItem,
  removeAllMenuItem,
} from '../../../redux/slice/checkout';

export const RestaurantTile: ListRenderItem<Restaurant> = ({item}) => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

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
        <Image
          source={{uri: AppConstants.RANDOM_IMG}}
          style={styles.img}
          resizeMode="cover"
        />
      </View>
      <View style={styles.restaurantDetailsContainer}>
        <Text style={styles.restaurantName}>{item.name}</Text>
        <Text style={styles.neighbourhoodText}>{item.neighborhood}</Text>
        <Text style={styles.neighbourhoodText}>{item.address}</Text>
        <Text style={styles.cuisineText}>{item.cuisine_type}</Text>
      </View>
    </Pressable>
  );
};
