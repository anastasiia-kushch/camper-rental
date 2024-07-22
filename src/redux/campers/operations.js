import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

export const getCampers = createAsyncThunk(
  'camper/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        'https://6602771b9d7276a755534b70.mockapi.io/adverts'
      );
      return response.data;
    } catch (error) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
