import {Image, ListRenderItem, Text, View, Pressable} from 'react-native';
import {Restaurant} from '../../redux/slice/types';
import {styles} from './RestaurantTile.styles';
import AppConstants from '../../utils/AppConstants';
import {useNavigation} from '@react-navigation/native';
import {useAppDispatch} from '../../redux/hooks';
import {addRestarauntItem} from '../../redux/slice/checkout';
import {MainStackNavigatorParamList} from '../../navigation/types';
import {useMemo} from 'react';

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
      </View>
    </Pressable>
  );
};
