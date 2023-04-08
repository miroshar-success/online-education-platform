import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/common/header/Header'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path=''  />
        </Switch>
      </Router>
    </>
  )
}

export default App