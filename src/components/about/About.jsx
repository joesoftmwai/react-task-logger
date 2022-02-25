import React from 'react'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';
import './About.css';


const About = () => {
  return (
    <div className='container'>
        <Header />
            <div className='my-2 by-1'>
                <h2>Version 1.0.0</h2>
                <Link to="/">Go back</Link>
            </div>
        <Footer/>
    </div>
  )
}

export default About