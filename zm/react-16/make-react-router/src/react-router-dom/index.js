import React from 'react';
import { __RouterContext
  as RouterContext
} from './index';
export * from '../react-router/index';

export { default as BrowserRouter} from './BrowserRouter'; 
export { default as Link} from './Link.jsx'

export default class Link extends React.Component {
  render() {
    return (
      <RouterContext.Consumer>
        {
          (context) => {
            const { history } = context;
            return (
              <a href={this.props.to}
              onClick={(event) => {
                event.preventDefault();
                history.push(this.props.to)
              }}
              >
                { this.props.children }
              </a>
            )
          }
        }
      </RouterContext.Consumer>
    )
  }
}