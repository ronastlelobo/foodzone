import React, {useMemo, useEffect} from 'react';
import {View, StatusBar, FlatList} from 'react-native';
import {styles} from './Menu.styles';
import Header from '../../components/Header/Header';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {getMenuAction} from '../../redux/slice/menu';
import {MenuTile} from '../../components/MenuTile/MenuTile';
import {MenuItem} from '../../redux/slice/types';
import {selectAllMenu} from '../../redux/slice/menu';

const Menu = () => {
  const dispatch = useAppDispatch();
  const menu = useAppSelector(selectAllMenu);

  useEffect(() => {
    dispatch(getMenuAction());
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#000'} />
      <Header />
      <FlatList
        data={menu}
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
    </View>
  );
};

export default Menu;
