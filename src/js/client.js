import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from './components/Layout.js'
import Home from './pages/Home.js'
import About from './pages/About.js'
import Skills from './pages/Skills.js'

const app = document.getElementById('app')
ReactDOM.render(
  <Router history={hashHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path="about" name="about" component={About}></Route>
        <Route path="skills/:skill" name="skills" component={Skills}></Route>
      </Route>
  </Router>,
app);
