import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { persistReducer ,persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from '../reducers';

// const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = createStore(
   persistedReducer,
   composeWithDevTools(
     applyMiddleware(thunk)
   )
);

export const persistor = persistStore(store)
