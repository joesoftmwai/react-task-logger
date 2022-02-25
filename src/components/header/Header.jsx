import React from 'react'
import PropTypes from 'prop-types'

import './Header.css';
import Button from '../button/Button';


const Header = ({title, onAdd, showAdd}) => {
    // const addTask = () => {
    //     console.log('elmas');
    //     onAdd
    // }
  return (
    <header className='header'>
        <h1>Task Logger</h1>
        <Button color={ showAdd ? 'red' : 'green'} 
            text={ showAdd ? 'Close' : 'Add'} 
            onClick={onAdd} />
    </header>
  )
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header