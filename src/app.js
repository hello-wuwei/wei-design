import React from 'react';
import { Router, Switch, Route } from 'react-router-dom'
import './style/common.less';
import history from './history'
import Layout from '@/Layout'

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Layout}/>
      </Switch>
    </Router>
  );
}

export default App;