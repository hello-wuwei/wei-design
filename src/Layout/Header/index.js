import React from 'react'
import { GithubOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import styles from './header.module.less'

const Header = ({ collapsed, onSwitch }) => {

  return (
    <div className={styles.header}>
      <div className="left">
        <span onClick={onSwitch} style={{ fontSize: 20 }}>
          { collapsed ?  <MenuFoldOutlined /> : <MenuUnfoldOutlined /> }
        </span>
      </div>
      <div className="right">
        <ul>
          <li>
            <GithubOutlined style={{ fontSize: 36 }} onClick={() => window.open('https://github.com/hello-wuwei/my-ui-library', '_blank')} />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header