import { createSlice } from '@reduxjs/toolkit';
import { addBookings } from './operations.js';

const bookingSlice = createSlice({
  name: 'booking',
  initialState: {
    bookings: [],
    isLoading: false,
    isError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(addBookings.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addBookings.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.bookings.push(action.payload);
      })
      .addCase(addBookings.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const bookingReducer = bookingSlice.reducer;
