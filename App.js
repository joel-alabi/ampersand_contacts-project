import React from 'react';
import {Provider} from 'react-redux'
import {store,persistor} from './src/redux/store';
import AppNavigation from './src/navigation/navigation';
import {PersistGate} from 'redux-persist/integration/react'

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <AppNavigation/>
      </PersistGate>
    </Provider>
  );
}
export default App;