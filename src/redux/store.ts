import {configureStore, combineReducers, AnyAction} from '@reduxjs/toolkit';
import {homeReducer} from './slice/home';
import {menuReducer} from './slice/menu';
import {checkoutReducer} from './slice/checkout';

const reducers = {
  home: homeReducer,
  menu: menuReducer,
  checkout: checkoutReducer,
};

const rootReducer = combineReducers(reducers);

const resettableRootReducer = (
  state: ReturnType<typeof rootReducer> | undefined,
  action: AnyAction,
) => {
  if (action.type === 'store/reset') {
    return rootReducer(undefined, action);
  }

  return rootReducer(state, action);
};

export const store = configureStore({
  reducer: resettableRootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
