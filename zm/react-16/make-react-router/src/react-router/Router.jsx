import  React from 'react'
// import Route from './Route';
import Context from './context'

class Router extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <Context.Provider value = {{
          history
        }}
        {...this.props}
      >
      </Context.Provider>
    )
  }
}
export default Router;