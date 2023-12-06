import React, {useEffect} from 'react';
import {View, StatusBar, SectionList, Text} from 'react-native';
import {styles} from './Menu.styles';
import Header from '../../components/Header/Header';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {getMenuAction, menuByCategoryName} from '../../redux/slice/menu';
import {MenuTile} from '../../components/MenuTile/MenuTile';
import {selectAllMenu} from '../../redux/slice/menu';
import {RestaurantTile} from '../../components/RestaurantTile/RestaurantTile';

const Menu = () => {
  const dispatch = useAppDispatch();
  const menu = useAppSelector(selectAllMenu);
  const menuByCatergory = useAppSelector(menuByCategoryName);
  const checkout = useAppSelector(state => state.checkout);

  useEffect(() => {
    dispatch(getMenuAction());
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#000'} />
      <Header />
      <SectionList
        sections={menuByCatergory}
        stickySectionHeadersEnabled={true}
        contentContainerStyle={styles.containerContent}
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
            <View style={styles.restaurantSeperator} />
          </>
        }
        keyExtractor={item => item.id}
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
        renderSectionHeader={({section: {title}}) => (
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionTitle}>{title}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Menu;
