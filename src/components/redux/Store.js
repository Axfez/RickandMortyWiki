import { configureStore } from '@reduxjs/toolkit'
import { dataApi } from '../Api'


export const store = configureStore({
  reducer: {
    // data: dataReducer,
    // character: characterReducer,
    [dataApi.reducerPath]: dataApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dataApi.middleware),
})
