import React from 'react'
import { libConfig } from '@/config'
import './list.less'

const { cls_pre } = libConfig

const List = ({ mode = 'line', children }) => {
  return (
    <ul  className={`${cls_pre}-list`} mode={mode}>
      {children}
    </ul>
  )
}

const Item = ({children}) => {
  return <li>{children}</li>
}

List.Item = Item

export default List