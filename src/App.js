import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/common/header/Header'
import Footer from './components/common/footer/Footer'
import Home from './components/home/Home'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home}  />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App