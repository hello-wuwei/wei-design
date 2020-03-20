import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Button from '@/docs/button'
import List from '@/docs/list'
import Card from '@/docs/card'

const MainRouter = () => (
  <Switch>
    <Redirect path="/" to="/button" exact />
    <Route path="/button" component={Button} />
    <Route path="/list" component={List} />
    <Route path="/card" component={Card} />
  </Switch>
)

export default MainRouter