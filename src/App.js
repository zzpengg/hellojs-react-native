import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import AppRoutes from './routes';
import ListView from './containers/ListView';

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}
