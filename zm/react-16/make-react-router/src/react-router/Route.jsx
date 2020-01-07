import React, { Component } from 'react';
import Context from './context';
import pathToRegexp from 'path-to-regexp';

class Route extends Component {
  // eslint-disable-next-line
  constructor (props) {
    super(props)
  }
  matchPath = (pathName, option) => {
    const { 
      path,
      exact = false, 
      sensitive = false,
      strict = false 
    } = option
    const regexp = pathToRegexp(path, [], {
      end: exact, sensitive, strict
    })
    const match = regexp.exec(pathName)
    return match
  }
  // location -> path -> component
  render() {
    // eslint-disable-next-line
    const {} = this.props
    return (
      <Context.Consumer>
        {
          (context) => {
            const location = context.history.location
            const match = this.matchPath(location.pathname,this.props)
            return (
              <>
                { match && this.props.children } 
              </>
            )
          }
        }
      </Context.Consumer>
    )
  }
}

export default Route;