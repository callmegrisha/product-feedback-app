import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getAllSuggestions = createAsyncThunk(
  '@@suggestions/getAllSuggestions',
  async (_, { extra: { client }, rejectWithValue }) => {
    try {
      const { data } = await client.get(
        'https://6468b518e99f0ba0a82acf93.mockapi.io/suggestions'
      );

      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const initialState = {
  status: 'idle',
  entities: [],
  error: null,
};

export const suggestionsSlice = createSlice({
  name: '@@suggestions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllSuggestions.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(getAllSuggestions.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.payload || action.meta.error;
    });
    builder.addCase(getAllSuggestions.fulfilled, (state, action) => {
      state.status = 'received';
      state.error = null;
      state.entities = action.payload;
    });
  },
});

export const suggestionsReducer = suggestionsSlice.reducer;

// selectors
export const selectSuggestionsInfo = (state) => state.suggestions;
