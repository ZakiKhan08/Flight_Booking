import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header'

const AuthLayout = () => {
  return (
    <>
    
    <Header />

    <Outlet />
    {/* No Footer Here */}
    
    
    </>
  )
}

export default AuthLayout