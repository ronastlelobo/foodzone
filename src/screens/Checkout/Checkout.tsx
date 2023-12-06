import React, {useMemo, useEffect} from 'react';
import {
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  Image,
  StatusBar,
  FlatList,
} from 'react-native';
import {styles} from './Checkout.styles';
import Header from '../../components/Header/Header';
import {useAppSelector} from '../../redux/hooks';
import {
  selectAllCheckout,
  selectMenuItemById,
} from '../../redux/slice/checkout';
import {MenuTile} from '../../components/MenuTile/MenuTile';
import {RestaurantTile} from '../../components/RestaurantTile/RestaurantTile';
import Bill from '../../components/Bill/Bill';
import CheckoutFooter from '../../components/CheckoutFooter/CheckoutFooter';

const Checkout = () => {
  const checkout = useAppSelector(state => state.checkout);
  const selectedCheckout = useAppSelector(selectAllCheckout);
  const total = useMemo(() => {
    const totalList = selectedCheckout.map(
      ele => Number(ele.price.replace('₹', '')) * ele.quantity,
    );
    return totalList.reduce((a, b) => a + b, 0);
  }, [selectedCheckout]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#000'} />
      <Header />
      <FlatList
        data={selectedCheckout}
        ListHeaderComponent={
          <>
            <RestaurantTile
              item={checkout.restaurant!}
              index={0}
              separators={{
                highlight: function (): void {
                  throw new Error('Function not implemented.');
                },
                unhighlight: function (): void {
                  throw new Error('Function not implemented.');
                },
                updateProps: function (
                  select: 'leading' | 'trailing',
                  newProps: any,
                ): void {
                  throw new Error('Function not implemented.');
                },
              }}
            />
            <Bill total={total} />
          </>
        }
        renderItem={({item}) => (
          <MenuTile
            item={item}
            index={0}
            separators={{
              highlight: function (): void {
                throw new Error('Function not implemented.');
              },
              unhighlight: function (): void {
                throw new Error('Function not implemented.');
              },
              updateProps: function (
                select: 'leading' | 'trailing',
                newProps: any,
              ): void {
                throw new Error('Function not implemented.');
              },
            }}
          />
        )}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.containerContent}
      />
      <CheckoutFooter />
    </View>
  );
};

export default Checkout;
