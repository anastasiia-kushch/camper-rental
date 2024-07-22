import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addBookings = createAsyncThunk(
  'booking/addBooking',
  async (bookingData, thunkAPI) => {
    try {
      const response = await axios.post(
        'https://669ce4de15704bb0e3048ae2.mockapi.io/bookings',
        bookingData
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
