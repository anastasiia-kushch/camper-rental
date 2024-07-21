import { createSlice } from '@reduxjs/toolkit';
import { getCampers } from './operations.js';

export const initialStateCampers = {
  campers: [],
  isLoading: false,
  isError: false,
  favoriteCampers: [],
  filters: {
    location: '',
    details: [],
    form: '',
  },
};

const campersSlice = createSlice({
  name: 'campers',
  initialState: initialStateCampers,

  reducers: {
    addFavorite: {
      reducer(state, action) {
        state.favoriteCampers.push(action.payload);
      },
      prepare(values) {
        return {
          payload: {
            ...values,
          },
        };
      },
    },
    deleteFavorite: (state, action) => {
      state.favoriteCampers = state.favoriteCampers.filter(
        (camper) => camper._id !== action.payload
      );
    },
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getCampers.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.campers = action.payload;
      })
      .addCase(getCampers.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const campersReducer = campersSlice.reducer;
export const { addFavorite, deleteFavorite, setFilters } = campersSlice.actions;
