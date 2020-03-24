import React, { Component } from 'react'
import { HashRouter,Switch,Route } from 'react-router-dom'

// import Home from "./pages/Home"
import Login from "./pages/Login"
import Reg from "./pages/Reg"
// import Lt from './pages/nav/Lt'
// import My from './pages/nav/My'
import City from './pages/nav/citySearch/City'
import Nav from './pages/Nav'
import Maps from './pages/nav/GDmap/map'

import Error404 from './pages/Error404'


export default class App extends Component {
  render() {
    return (
        <HashRouter>
          <Switch>
            {/* <Route path="/" exact component={Home}></Route> */}
            <Route path="/login" component={Login}></Route>
            <Route path="/reg" component={Reg}></Route>
            {/* <Route path="/lt" component={Lt}></Route> */}
            {/* <Route path="/my" component={My}></Route> */}
            <Route path="/city" component={City}></Route>
            <Route path="/" exact component={Nav}></Route>
            <Route path="/map" component={Maps}></Route>

            <Route component={Error404}></Route>
          </Switch>
        </HashRouter>
    )
  }
}

