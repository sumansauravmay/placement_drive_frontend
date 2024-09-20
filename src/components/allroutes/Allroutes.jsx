import React from 'react'
import Signup from '../Signup/Signup';
import { Route, Routes } from 'react-router-dom';
import Name from '../memo/Name';

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/reactmemo" element={<Name/>}></Route>
    </Routes>
  )
}

export default Allroutes
