import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import { Layout } from 'antd'
import SiderBar from './SiderBar'
import Introduce from './Pages/Introduce/index.js'
const { Sider, Content } = Layout

const Frame = ({ match }) => {
  return (
    <Layout style={{ height: '100%' }}>
      <Sider style={{ background: '#fff' }}><SiderBar match={match} /></Sider>
      <Content style={{ padding: 20, overflowY: 'scroll', background: '#fff' }}>
        <Switch>
          <Redirect path={`${match.url}`} to={`${match.url}/introduce`} exact />
          <Route path={`${match.url}/introduce`} component={Introduce} />
        </Switch>
      </Content>
    </Layout>
  )
}

export default Frame