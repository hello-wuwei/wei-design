import React from 'react'
import { libConfig } from '@/config'
import './button.less'

const { cls_pre } = libConfig

const Button = ({ type = 'default', children, ...props }) => {
  return <button className={`${cls_pre}-button ${cls_pre}-button-${type}`} {...props}>{children}</button>
}

export default Button