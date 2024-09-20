import React from 'react'
import Signup from '../Signup/Signup';
import { Route, Routes } from 'react-router-dom';

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/signup" element={<Signup/>}></Route>
    </Routes>
  )
}

export default Allroutes
