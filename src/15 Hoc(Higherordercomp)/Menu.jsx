import React from 'react'
import Hoc from './Hoc'
const Menu = (props) => {
  return (
      <div>{props.state.username} {props.state.Company}</div>
  )
}

export default Hoc(Menu)