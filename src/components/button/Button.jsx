import React from 'react';
import './Button.css';
import  PropTypes  from 'prop-types';

const Button = ({ color, text, onClick }) => {

    // const addTask = () => {
    //     console.log('will never alone');
    // }

  return (
    <button onClick={onClick} style={{ backgroundColor: color, }} className='btn'>{text}</button>
  )
}

Button.defaultProps = {
    color: 'steelblue',
}

Button.propTypes = {
    colo: PropTypes.string,
    text: PropTypes.string,
    addTask: PropTypes.func,
}

export default Button