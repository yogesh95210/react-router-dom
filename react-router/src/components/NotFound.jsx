import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <>
        <h1>404 - Page Not Found</h1>
        <h3>Sorry, the page you are looking for does not exist.</h3>
        <Link to="/">Go back to Home</Link>
    </>
  )
}

export default NotFound