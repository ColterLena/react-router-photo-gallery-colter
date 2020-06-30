import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { CategoryList } from './components/CategoryList'
import { PhotoList } from './components/PhotoList'
import { PhotoDetail } from './components/PhotoDetail'
import { Header } from './components/Header'

class App extends Component {
  render() {
    return (
      <Router>
        <main>
          <Header />
          <section className="section">
            <Switch>
              <Route exact path="/" component={CategoryList} />
              <Route
                exact
                path="/:theNameOfTheCategoryWeWantToLookAt"
                component={PhotoList}
              />
              <Route
                path="/:theNameOfTheCategoryWeWantToLookAt/:arrayIndexOfThePhoto"
                component={PhotoDetail}
              />
            </Switch>
          </section>
        </main>
      </Router>
    )
  }
}

export default App
