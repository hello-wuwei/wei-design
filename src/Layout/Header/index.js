import React from 'react'
import { Icon, Avatar } from 'antd'
import { QqOutlined } from '@ant-design/icons';
import styles from './header.module.less'

const Header = ({ collapsed, onSwitch }) => {
  return (
    <div className={styles.header}>
      <div className="left">
        <Icon style={{ fontSize: 20 }} type={collapsed ? 'menu-unfold' : 'menu-fold'} onClick={onSwitch} />
      </div>
      <div className="right">
        <ul>
          <li>
            <QqOutlined />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header