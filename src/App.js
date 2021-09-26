import React from 'react'

import {Home} from "./pages/Home/"
import {FilmDetail} from "./pages/FilmDetail"
import {PageNotFound} from "./pages/PageNotFound"

import {Route, Switch} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact><Home /></Route>
        <Route path="/movies/:id" exact><FilmDetail /></Route>
        <Route ><PageNotFound /></Route>
      </Switch>
    </div>
  )
}

export default App