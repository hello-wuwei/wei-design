import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Button from '@/docs/button'
import List from '@/docs/list'

const MainRouter = () => (
  <Switch>
    <Route path="/button" component={Button} />
    <Route path="/list" component={List} />
  </Switch>
)

export default MainRouter