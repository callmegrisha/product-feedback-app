import axios from 'axios';
import { configureStore } from '@reduxjs/toolkit';

import { suggestionsReducer } from './suggestions/suggestionsSlice';

const initialState = {
  suggestions: suggestionsReducer,
};

export const store = configureStore({
  reducer: initialState,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          client: axios,
        },
      },
      serializableCheck: false,
    }),
});
