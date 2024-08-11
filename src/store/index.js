import { configureStore } from '@reduxjs/toolkit';
import tradesReducer from '/Users/jackbell/Desktop/new-tick-inspector/src/store/tradesSlice.js';
import quotesReducer from '/Users/jackbell/Desktop/new-tick-inspector/src/store/quotesSlice';

export const store = configureStore({
  reducer: {
    trades: tradesReducer,
    quotes: quotesReducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(/* your custom middleware here */)
});