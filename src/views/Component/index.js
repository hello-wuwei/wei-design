import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import { Layout } from 'antd'
import SiderBar from './SiderBar'
import Button from '@/docs/button'
import List from '@/docs/list'
import Card from '@/docs/card'
const { Sider, Content } = Layout

const Frame = ({ match }) => {
  return (
    <Layout style={{ height: '100%' }}>
      <Sider style={{ background: '#fff' }}><SiderBar match={match} /></Sider>
      <Content style={{ padding: 20, overflowY: 'scroll', background: '#fff' }}>
        <Switch>
          <Redirect path={`${match.url}`} to={`${match.url}/button`} exact />
          <Route path={`${match.url}/button`} component={Button} />
          <Route path={`${match.url}/list`} component={List} />
          <Route path={`${match.url}/card`} component={Card} />
        </Switch>
      </Content>
    </Layout>
  )
}

export default Frame