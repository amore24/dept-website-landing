import { configureStore } from '@reduxjs/toolkit';
import industriesSlice from './slice/industriesSlice';

export const store = configureStore({
  reducer:industriesSlice
});