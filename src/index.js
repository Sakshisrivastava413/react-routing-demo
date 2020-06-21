import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import About from './About';
import Projects from './Projects';
import Project from './Project';
import PageNotFound from './PageNotFound';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route exact path="/projects" component={Projects}/>
      <Route path="/project/:projectId" component={Project}/>
      <Route path="/about" component={About}/>
      <Route path="*" component={PageNotFound}/>
    </Route>
  </Router>
), document.getElementById('root'));
