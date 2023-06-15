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

export const getOneSuggestion = createAsyncThunk(
  '@@suggestions/getOneSuggestion',
  async (id, { extra: { client }, rejectWithValue }) => {
    try {
      const { data } = await client.get(
        `http://localhost:3000/productRequests/${id}`
      );

      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const createSuggestion = createAsyncThunk(
  '@@suggestions/createSuggestion',
  async (suggestionObj, { extra: { client }, rejectWithValue }) => {
    try {
      const { data } = await client.post(
        'http://localhost:3000/productRequests',
        suggestionObj
      );

      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const updateSuggestion = createAsyncThunk(
  '@@suggestions/updateSuggestion',
  async ({ id, suggestionObj }, { extra: { client }, rejectWithValue }) => {
    try {
      const { data } = await client.patch(
        `http://localhost:3000/productRequests/${id}`,
        suggestionObj
      );

      return { data };
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const deleteSuggestion = createAsyncThunk(
  '@@suggestions/deleteSuggestion',
  async (id, { extra: { client }, rejectWithValue }) => {
    try {
      const { data } = await client.delete(
        `http://localhost:3000/productRequests/${id}`
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
  currentSuggestion: null,
  sort: 'mostUpvotes',
  error: null,
};

export const suggestionsSlice = createSlice({
  name: '@@suggestions',
  initialState,
  reducers: {
    selectSortMethod: (state, action) => {
      state.sort = action.payload;
    },
  },
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
    // get one suggestion
    builder.addCase(getOneSuggestion.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(getOneSuggestion.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.payload || action.meta.error;
    });
    builder.addCase(getOneSuggestion.fulfilled, (state, action) => {
      state.status = 'received';
      state.error = null;
      state.currentSuggestion = action.payload;
    });
    // create suggestion
    builder.addCase(createSuggestion.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(createSuggestion.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.payload || action.meta.error;
    });
    builder.addCase(createSuggestion.fulfilled, (state, action) => {
      state.status = 'received';
      state.error = null;
      const { payload } = action;
      state.entities.push(payload);
    });
    // update suggestion
    builder.addCase(updateSuggestion.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(updateSuggestion.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.payload || action.meta.error;
    });
    builder.addCase(updateSuggestion.fulfilled, (state, action) => {
      state.status = 'received';
      state.error = null;
      const { data } = action.payload;
      if (state.currentSuggestion.id === data.id) {
        state.currentSuggestion = data;
      }
    });
    // delete suggestion
    builder.addCase(deleteSuggestion.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(deleteSuggestion.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.payload || action.meta.error;
    });
    builder.addCase(deleteSuggestion.fulfilled, (state, action) => {
      state.status = 'received';
      state.error = null;
      console.log('deleteSuggestion.fulfilled', action);
    });
  },
});

export const { selectSortMethod } = suggestionsSlice.actions;

export const suggestionsReducer = suggestionsSlice.reducer;

// selectors
export const selectSuggestionsInfo = (state) => state.suggestions;
export const selectCurrentSuggestion = (state) =>
  state.suggestions.currentSuggestion;
