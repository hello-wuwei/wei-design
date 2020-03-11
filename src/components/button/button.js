import React from 'react'
import { libConfig } from '@/config'
import './button.less'

const { cls_pre } = libConfig

const Button = ({ type = 'default', children }) => {
  return <button className={`${cls_pre}-button`} type={type}>{children}</button>
}

export default Button