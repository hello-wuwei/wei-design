import React from 'react'
import Menu from './Menu'
import styles from './index.module.less'

const SiderBar = ({ collapsed }) => {
  return (
    <div className={styles.siderbar}>
      <div className="logo">
        {!collapsed && 'We-Design'}
      </div>
      <Menu />
    </div>
  )
}

export default SiderBar