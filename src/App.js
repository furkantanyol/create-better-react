import React from 'react'
import { hot } from 'react-hot-loader'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
      </div>
    )
  }
}

const hotFunction = hot(module)

export default hotFunction(App)
