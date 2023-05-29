import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/authSlice';
import { contactsReducer } from './pets/petsSlice';
import { noticesSlice } from './notices/noticesSlice';
import { noticeItemSlice } from './notices/noticeItemSlice';

const persistConfig = {
  key: 'token',
  storage,
  whitelist: 'token',
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authReducer),
    pets: contactsReducer,
    notices: noticesSlice.reducer,
    noticeItem: noticeItemSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
