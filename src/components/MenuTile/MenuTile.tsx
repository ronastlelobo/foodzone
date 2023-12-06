import {Image, ListRenderItem, Text, View, Pressable} from 'react-native';
import {MenuItem} from '../../redux/slice/types';
import {styles} from './MenuTile.styles';
import AppConstants from '../../utils/AppConstants';
import ImageLib from '../../utils/ImageLib';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {
  addMenuItem,
  removeMenuItem,
  updateMenuItem,
} from '../../redux/slice/checkout';
import {selectMenuItemById} from '../../redux/slice/checkout';
import {useMemo} from 'react';

export const MenuTile: ListRenderItem<MenuItem> = ({item}) => {
  const dispatch = useAppDispatch();
  const checkout = useAppSelector(state => selectMenuItemById(state, item.id));
  const img = useMemo(() => {
    return `https://source.unsplash.com/collection/622228?sig=${Math.floor(
      Math.random() * 100,
    )}`;
  }, []);

  const addItem = () => {
    if (checkout?.id) {
      dispatch(
        updateMenuItem({
          id: item.id,
          changes: {quantity: checkout.quantity + 1},
        }),
      );
    } else {
      dispatch(addMenuItem({...item, quantity: 1}));
    }
  };

  const removeItem = () => {
    if (checkout?.id) {
      if (checkout.quantity > 0) {
        dispatch(
          updateMenuItem({
            id: item.id,
            changes: {quantity: checkout.quantity - 1},
          }),
        );
      } else {
        dispatch(removeMenuItem(item.id));
      }
    }
  };

  return (
    <View key={item.id.toString()} style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={{uri: img}} style={styles.img} resizeMode="cover" />
      </View>
      <View style={styles.restaurantDetailsContainer}>
        <Text style={styles.dishName}>{item.name}</Text>
        <Text style={styles.categoryName}>
          {item.category_name}, {item.cuisine_name}
        </Text>
        <Text style={styles.priceText}>{item.price}</Text>
        <View style={styles.quantityContainer}>
          <Pressable
            onPress={() => {
              removeItem();
            }}>
            <Image source={ImageLib.removeIcon} resizeMode="center" />
          </Pressable>
          <Text style={styles.quantityText}>{checkout?.quantity || 0}</Text>
          <Pressable
            onPress={() => {
              addItem();
            }}>
            <Image source={ImageLib.addIcon} resizeMode="center" />
          </Pressable>
        </View>
      </View>
    </View>
  );
};
