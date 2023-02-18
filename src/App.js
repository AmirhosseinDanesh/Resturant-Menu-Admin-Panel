import React from 'react'
import Sidebar from './Components/Sidebar/Sidebar'
import Header from './Components/Header/Header'

import Main from "./Pages/Main/Main"
import Products from "./Pages/Products/Products"
import Orders from "./Pages/Orders/Orders"
import Users from "./Pages/Users/Users"
import Comments from "./Pages/Comments/Comments"
import Offs from "./Pages/Offs/Offs"

import { Routes , Route } from 'react-router-dom'
import ContextData from "./Contexts/ContextData"

import "./App.css"

export default function App() {
  return (

    <div className="d-flex flex-row justify-content-between">
      <Sidebar />
      <div className="main d-flex flex-column m-1 p-3 p-md-4 bg-white ">
        <Header />
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/orders' element={<Orders/>} />
          <Route path='/users' element={<Users/>} />
          <Route path='/comments' element={<Comments/>} />
          <Route path='/offs' element={<Offs/>} />
        </Routes>
      </div>

    </div>
  )
}
