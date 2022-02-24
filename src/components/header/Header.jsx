import React from 'react'

const Header = ({title}) => {
  return (
    <header>
        <i>{title}</i>
        <h1>Task Logger</h1>
    </header>
  )
}

export default Header