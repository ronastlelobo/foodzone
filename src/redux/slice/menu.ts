import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';
import {LoadingState} from '../types';
import {Menu, MenuItem} from './types';
import {getAllMenu} from '../../api/checkout';

const initialState: Menu = {
  data: [],
  loading: LoadingState.unset,
};

const menuEntityAdapter = createEntityAdapter({
  selectId: (data: MenuItem) => data.id,
});

export const getMenuAction = createAsyncThunk('menu/getMenu', async () => {
  const {menu} = await getAllMenu();
  return menu;
});

export const menuSlice = createSlice({
  name: 'menu',
  initialState: menuEntityAdapter.getInitialState(initialState),
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getMenuAction.pending, (state: {loading: string}) => {
      state.loading = LoadingState.loading;
    });
    builder.addCase(getMenuAction.fulfilled, (state, {payload}) => {
      menuEntityAdapter.setAll(state, payload);
      state.loading = LoadingState.loaded;
    });
    builder.addCase(getMenuAction.rejected, (state: {loading: string}) => {
      state.loading = LoadingState.failed;
    });
  },
});

type State = {
  menu: ReturnType<typeof menuSlice.reducer>;
};

const menuSelectors = menuEntityAdapter.getSelectors<State>(
  state => state.menu,
);

export const selectAllMenu = menuSelectors.selectAll as (
  state: State,
) => MenuItem[];

export const selectMenuItemById = menuSelectors.selectById;

export const menuReducer = menuSlice.reducer;
