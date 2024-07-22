import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

export const addBookings = createAsyncThunk(
  'booking/addBooking',
  async (bookingData, thunkAPI) => {
    try {
      const response = await axios.post(
        'https://669ce4de15704bb0e3048ae2.mockapi.io/bookings',
        bookingData
      );
      toast.success('Reserwation completed!🥳');
      return response.data;
    } catch (error) {
      toast.error('Oops... Try again!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
