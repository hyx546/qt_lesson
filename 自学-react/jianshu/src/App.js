import React from 'react';
import {GlobalStyle} from './style';
import {GlobalStyle1} from './static/iconfont/iconfont'
import Header from './common/header'
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Provider store = {store}>
        <GlobalStyle/> 
        <GlobalStyle1/> 
        <Header />
      </Provider>
      
    </div>
  );
}

export default App;
