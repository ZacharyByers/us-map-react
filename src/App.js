import React from 'react'
import { Switch, Route } from 'react-router-dom'
import USMap from './components/USMap'

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={USMap} />
      </Switch>
    )
  }
}

export default App
