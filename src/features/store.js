import axios from 'axios';
import { configureStore } from '@reduxjs/toolkit';

import { suggestionsReducer } from './suggestions/suggestionsSlice';
import { profileReducer } from './profile/profileSlice';

const initialState = {
  suggestions: suggestionsReducer,
  profile: profileReducer,
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
