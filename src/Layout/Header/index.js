import React from 'react'
import { Menu } from 'antd';
import { GithubOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import history from '@/history'
import styles from './header.module.less'

const Header = () => {
  const handleClick = ({ key }) => {
    history.push(key)
  }

  return (
    <div className={styles.header}>
      <div className="left">
        <div className="logo">
          Wei-Design
        </div>
      </div>
      <div className="right">
        <Menu onClick={handleClick} defaultSelectedKeys={['document']} mode="horizontal">
          <Menu.Item key="/document">
            文档
          </Menu.Item>
          <Menu.Item key="/component">
            组件
          </Menu.Item>
          <Menu.Item key="/github" disabled>
            <GithubOutlined style={{ fontSize: 30, color: '#333' }} onClick={() => window.open('https://github.com/hello-wuwei/my-ui-library', '_blank')} />
          </Menu.Item>
        </Menu>
      </div>
    </div>
  )
}

export default Header