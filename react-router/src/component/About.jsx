import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <h2>About</h2>
        <Link to={`/`}>Home</Link>
        <Link to={`/ab`}>About</Link>
        <Link to={`/product`}>Product</Link>
    </div>
  )
}

export default About
