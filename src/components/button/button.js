import React from 'react'

const Button = ({ type = 'default', children }) => {
  return <button type={type}>{children}</button>
}

export default Button