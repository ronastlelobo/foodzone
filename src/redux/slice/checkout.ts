import {createSlice, createEntityAdapter} from '@reduxjs/toolkit';
import {LoadingState} from '../types';
import {MenuItem, Checkout} from './types';

const initialState: Checkout = {
  data: [],
  loading: LoadingState.unset,
};

const checkoutEntityAdapter = createEntityAdapter({
  selectId: (data: MenuItem) => data.id,
});

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState: checkoutEntityAdapter.getInitialState(initialState),
  reducers: {
    addRestarauntItem: (state, {payload}) => {
      state.restaurant = payload;
    },
    addMenuItem: checkoutEntityAdapter.addOne,
    updateMenuItem: checkoutEntityAdapter.updateOne,
    removeMenuItem: checkoutEntityAdapter.removeOne,
    removeAllMenuItem: checkoutEntityAdapter.removeAll,
  },
});

export const {
  addMenuItem,
  removeMenuItem,
  updateMenuItem,
  addRestarauntItem,
  removeAllMenuItem,
} = checkoutSlice.actions;

type State = {
  checkout: ReturnType<typeof checkoutSlice.reducer>;
};

const checkoutSelectors = checkoutEntityAdapter.getSelectors<State>(
  state => state.checkout,
);

export const selectAllCheckout = checkoutSelectors.selectAll as (
  state: State,
) => MenuItem[];

export const selectMenuItemById = checkoutSelectors.selectById;

export const checkoutReducer = checkoutSlice.reducer;
