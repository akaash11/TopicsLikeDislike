import React from 'react';
import './App.css';
import MainPage from "./container/MainPage/MainPage"
import { Provider } from 'react-redux';
import store from './redux-store/store';

window.APPSTORE = store;
function App() {
  return (
    <Provider store={store}>
        <MainPage/>
    </Provider>
  );
}

export default App;
