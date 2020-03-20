import React, { useState } from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import { Layout } from 'antd'
import LayoutHeader from './Header'
import Documents from '@/views/Document'
import Components from '@/views/Component'
const { Header, Sider, Content } = Layout

const Frame = () => {
  const [ collapsed, setCollapsed ] = useState(false)
  const onSwitch = () => {
    setCollapsed(!collapsed)
  }
  return (
    <Layout style={{ height: '100%' }}>
      <Header style={{ background: '#fff', padding: 0 }}><LayoutHeader /></Header>
      <Content style={{ padding: 20, overflowY: 'scroll', background: '#fff' }}>
        <Switch>
          <Redirect path="/" to="/document" exact />
          <Route path="/document" component={Documents} />
          <Route path="/component" component={Components} />
        </Switch>
      </Content>
    </Layout>
  )
}

export default Frame