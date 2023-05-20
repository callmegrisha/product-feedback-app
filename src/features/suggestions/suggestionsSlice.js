import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getAllSuggestions = createAsyncThunk(
  '@@suggestions/getAllSuggestions',
  async (_, { extra: { client }, rejectWithValue }) => {
    try {
      const { data } = await client.get(
        'http://localhost:3000/productRequests'
      );

      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const getSuggestionByCategory = createAsyncThunk(
  '@@suggestions/getSuggestionByCategory',
  async (category, { extra: { client }, rejectWithValue }) => {
    try {
      const { data } = await client.get(
        `http://localhost:3000/productRequests?category=${category.toLowerCase()}`
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
    // get all suggestions
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
    // get suggestion by category
    builder.addCase(getSuggestionByCategory.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(getSuggestionByCategory.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.payload || action.meta.error;
    });
    builder.addCase(getSuggestionByCategory.fulfilled, (state, action) => {
      state.status = 'received';
      state.error = null;
      state.entities = [];
      state.entities.push(...action.payload);
    });
  },
});

export const suggestionsReducer = suggestionsSlice.reducer;

// selectors
export const selectSuggestionsInfo = (state) => state.suggestions;
