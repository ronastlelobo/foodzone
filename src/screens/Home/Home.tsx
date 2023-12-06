import React, {useEffect} from 'react';
import {View, StatusBar, FlatList} from 'react-native';
import Header from '../../components/Header/Header';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {getRestaurantsAction} from '../../redux/slice/home';
import {styles} from './Home.styles';
import {Restaurant} from '../../redux/slice/types';
import {RestaurantTile} from '../../components/RestaurantTile/RestaurantTile';

const Home = () => {
  const dispatch = useAppDispatch();
  const {data} = useAppSelector(state => state.home);

  useEffect(() => {
    dispatch(getRestaurantsAction());
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#000'} />
      <Header />
      <FlatList
        data={data}
        renderItem={({item}) => (
          <RestaurantTile
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

export default Home;
