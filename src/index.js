import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducer';
import App from './components/app';

// создаем store, глобальное хранилище (включает actions, state)
const store = createStore(reducer);

ReactDOM.render(
  // с помощью Provider мы можем использовать store во всем приложении, в любом компоненте ниже
  <Provider store={store}>
    <App/>    
  </Provider>
  , document.getElementById('root'));



