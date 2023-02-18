import React from 'react'
import Sidebar from './Components/Sidebar/Sidebar'
import Header from './Components/Header/Header'

import ContextData from "./Contexts/ContextData"

import "./App.css"

export default function App() {
  return (

    <div className="d-flex flex-row justify-content-between">
      <Sidebar />
      <div className="main d-flex flex-column m-1 p-3 p-md-4 bg-white ">
        <Header />
      </div>

    </div>
  )
}
