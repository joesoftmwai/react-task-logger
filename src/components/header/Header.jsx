import React from 'react'
import PropTypes from 'prop-types'

const Header = ({title}) => {
  return (
    <header>
        <i>{title}</i>
        <h1>Task Logger</h1>
    </header>
  )
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header