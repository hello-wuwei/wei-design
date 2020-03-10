import React from 'react'

const List = ({ mode = 'line', data = [] }) => {
  return (
    <ul mode={mode}>
      {
        data.map(item => <li>{item.text}</li>)
      }
    </ul>
  )
}

export default List