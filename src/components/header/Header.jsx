import React from 'react'
import PropTypes from 'prop-types'

import './Header.css';
import Button from '../button/Button';


const Header = ({title}) => {
    const addTask = () => {
        console.log('elmas');
    }
  return (
    <header className='header'>
        <h1>Task Logger</h1>
        <Button color='green' text='Add' onClick={addTask} />
    </header>
  )
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header