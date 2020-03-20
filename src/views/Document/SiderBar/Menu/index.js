import React from 'react'
import { Menu } from 'antd'
import { list } from './config'
import history from '@/history'

const Index = ({ match }) => {
  
  const onMenuItemClick = ({ key }) => {
    history.push(`${match.url}${key}`)
  }

  return (
    <Menu defaultSelectedKeys={['1']} mode="inline" onClick={onMenuItemClick}>
      {
        list.map((menu) => 
          <Menu.Item key={menu.path}>
            <span>{menu.name}</span>
          </Menu.Item>
        )
      }
    </Menu>
  )
}

export default Index