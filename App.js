import React, {Fragment} from 'react';
import ToDoItemsList from './src/ToDoItemsList'
import {Provider} from 'react-redux'
import configureStore from './redux/store'

const App = () => {
  return (
    <Provider store={configureStore}>
      <ToDoItemsList />
    </Provider>
  );
};

export default App;