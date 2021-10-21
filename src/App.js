import './App.css';
import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


export default class App extends Component {
  pagesize = 6
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <Switch>
            <Route exact path="/"><News pageSize={this.pagesize} key="general" country="in" category="general" /></Route>
            <Route exact path="/business"><News pageSize={this.pagesize} key="business" country="in" category="business" /></Route>
            <Route exact path="/entertainment"><News pageSize={this.pagesize} key="entertainment" country="in" category="entertainment" /></Route>
            <Route exact path="/general"><News pageSize={this.pagesize} key="general" country="in" category="general" /></Route>
            <Route exact path="/sports"><News pageSize={this.pagesize} key="sports" country="in" category="sports" /></Route>
            <Route exact path="/health"><News pageSize={this.pagesize} key="health" country="in" category="health" /></Route>
            <Route exact path="/science"><News pageSize={this.pagesize} key="science" country="in" category="science" /></Route>
            <Route exact path="/technology"><News pageSize={this.pagesize} key="technology" country="in" category="technology" /></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}
