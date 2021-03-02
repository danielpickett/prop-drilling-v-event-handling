import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Nav, PropDrillingExample, EventHandlingExample } from 'pages'
import './App.scss'

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <h1>Home</h1>
            <p>Nothing to see here</p>
          </Route>
          <Route path="/prop-drilling-example">
            <PropDrillingExample />
          </Route>
          <Route path="/event-handling-example">
            <EventHandlingExample />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
