import React from 'react';
import {
  createBrowserHistory
} from 'history'
import Router from '../react-router/Router'
class BrowserRouter extends React.Component{
  // 路由的信息 {location, listen , push , go}
  // h5 history api
  history = createBrowserHistory()
  render() {
    return (
      <Router history={this.history} {...this.props}/>
    )
  }
}
export default BrowserRouter