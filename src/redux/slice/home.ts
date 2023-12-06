import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getAllRestaurants} from '../../api/home';
import {LoadingState} from '../types';
import {RestaurantType} from './types';

const initialState: RestaurantType = {
  data: [],
  loading: LoadingState.unset,
};

export const getRestaurantsAction = createAsyncThunk(
  'home/getRestaurants',
  async () => {
    const {restaurants} = await getAllRestaurants();
    return restaurants;
  },
);

export const homeSlice = createSlice({
  name: 'home',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      getRestaurantsAction.pending,
      (state: {loading: string}) => {
        state.loading = LoadingState.loading;
      },
    );
    builder.addCase(getRestaurantsAction.fulfilled, (state, {payload}) => {
      state.data = payload;
      state.loading = LoadingState.loaded;
    });
    builder.addCase(
      getRestaurantsAction.rejected,
      (state: {loading: string}) => {
        state.loading = LoadingState.failed;
      },
    );
  },
});

export const homeReducer = homeSlice.reducer;
