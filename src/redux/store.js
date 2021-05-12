import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
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

import contactsReducer from './contacts/reducer';
import authReducer from './auth/auth-reducer';



const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  // logger,
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
  },

  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);


export default { store, persistor };








//Redux
// import { createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension'; для подключения devTools

// import rootReducer from './contacts/rootReducer';

// const store = createStore(rootReducer, composeWithDevTools());

// export default store;