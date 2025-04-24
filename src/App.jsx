import { useState } from 'react'
import RegisterComponent from '../Component/RegisterComponent'
import LoginComponent from '../Component/LoginComponent'
import {Routes, Route} from 'react-router-dom'
import Dashboard from '../Component/Dashboard'

function App() {


  return (
    <div>
        <Routes>
            <Route path="/" element={<RegisterComponent/>}/>
            <Route path="/Login" element={<LoginComponent/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>

        </Routes>
    </div>
  )
}


export default App
