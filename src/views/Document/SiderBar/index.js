import React from 'react'
import Menu from './Menu'
import styles from './index.module.less'

const SiderBar = ({ match }) => {
  return (
    <div className={styles.siderbar}>
      <Menu match={match} />
    </div>
  )
}

export default SiderBar