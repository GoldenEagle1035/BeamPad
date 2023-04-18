import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { userApi } from './apis/userApi';

import userReducer from './features/userSlice'
export default configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,

    userState: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([
      userApi.middleware,
    ]),
})

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;