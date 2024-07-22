import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { campersReducer } from './campers/slice.js';
import { bookingReducer } from './booking/slice.js';

const favoritePersistConfig = {
  key: 'campers',
  storage,
  whitelist: ['favoriteCampers'],
};

export const store = configureStore({
  reducer: {
    favorite: persistReducer(favoritePersistConfig, campersReducer),
    booking: bookingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
