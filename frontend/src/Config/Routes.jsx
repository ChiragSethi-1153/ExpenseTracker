import React from 'react'
import { Routes, Route } from 'react-router-dom'
import UserSignup from '../Components/UserSignup/UserSignup'
import UserLogin from '../Components/UserLogin/UserLogin'
import Home from '../Components/Home/Home'

const Routing = () => {
  return (
    <div>
        <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/signup" Component={UserSignup} />
        <Route path="/login" Component={UserLogin} />
        </Routes>
    </div>
  )
}

export default Routing
