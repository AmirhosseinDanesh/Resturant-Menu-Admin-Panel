import React from 'react'
import Sidebar from './Components/Sidebar/Sidebar'
import Header from './Components/Header/Header'
import "./App.css"
export default function App() {
  return (
    <div className="d-flex flex-row justify-content-between">
      <Sidebar />
      <div className="main">
        <Header />
      </div>

    </div>
  )
}
