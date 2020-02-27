import React from 'react';
import {GlobalStyle} from './style';
import {GlobalStyle1} from './static/iconfont/iconfont'
import Header from './common/header'
import store from './store';
import { BrowserRouter, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './page/home';
import Detail from './page/detail/loadable.js';
import Login from './page/login';
import Write from './page/write';

function App() {
  return (
    <div className="App">
      <Provider store = {store}>
        <BrowserRouter>
          <div>
            <GlobalStyle/> 
            <GlobalStyle1/> 
            <Header />
            <Route path='/' exact component={Home}></Route>
            <Route path='/login' exact component={Login}></Route>
            <Route path='/detail/:id' exact component={Detail}></Route>
            <Route path='/write' exact component={Write}></Route>
          </div>
        </BrowserRouter>
      </Provider>
      
    </div>
  );
}

export default App;
