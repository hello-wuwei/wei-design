import React, { useState } from 'react'
import { Layout } from 'antd'
import SiderBar from './SiderBar'
import LayoutHeader from './Header'
import MainRouter from './MainRouter'
const { Header, Sider, Content } = Layout

const Frame = () => {
  const [ collapsed, setCollapsed ] = useState(false)
  const onSwitch = () => {
    setCollapsed(!collapsed)
  }
  return (
    <Layout style={{ height: '100%' }}>
      <Sider style={{ background: '#fff' }} collapsed={collapsed}><SiderBar collapsed={collapsed} /></Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}><LayoutHeader collapsed={collapsed} onSwitch={onSwitch} /></Header>
        <Content style={{ padding: 20, overflowY: 'scroll' }}>
          <MainRouter />
        </Content>
      </Layout>
    </Layout>
  )
}

export default Frame