import React from 'react'
import { libConfig } from '@/config'
import './card.less'

const { cls_pre } = libConfig

const Card = ({ type = 'default', children }) => {
  return <div className={`${cls_pre}-card`} type={type}>{children}</div>
}

export default Card