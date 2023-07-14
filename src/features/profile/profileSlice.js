import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getCurrentProfile = createAsyncThunk(
  '@@profile/getCurrentProfile',
  async (_, { extra: { client }, rejectWithValue }) => {
    try {
      const { data } = await client.get('http://localhost:3001/currentUser');

      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const initialState = {
  status: 'idle',
  currentProfile: {},
  error: null,
};

export const profileSlice = createSlice({
  name: '@@profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCurrentProfile.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(getCurrentProfile.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.payload || action.meta.error;
    });
    builder.addCase(getCurrentProfile.fulfilled, (state, action) => {
      state.status = 'received';
      state.error = null;
      state.currentProfile = action.payload;
    });
  },
});

export const profileReducer = profileSlice.reducer;

// selectors
export const selectCurrentProfile = (state) => state.profile.currentProfile;
