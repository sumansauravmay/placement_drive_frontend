import React from 'react'
import Signup from '../Signup/Signup';
import { Route, Routes } from 'react-router-dom';
import Name from '../memo/Name';
import Infinite from '../Infinite/Infinite';

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/reactmemo" element={<Name/>}></Route>
      <Route path="/" element={<Infinite/>}></Route>
    </Routes>
  )
}

export default Allroutes
