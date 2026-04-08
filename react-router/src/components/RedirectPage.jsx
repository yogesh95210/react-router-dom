import React from 'react'
import { Navigate } from 'react-router-dom'

function RedirectPage() {
  return (
    <Navigate to="/" />
  )
}

export default RedirectPage