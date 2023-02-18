import React from 'react'
import { useRoutes } from 'react-router-dom'

import Sidebar from './Components/Sidebar/Sidebar'
import Header from './Components/Header/Header'

import routes from './Routes/routes'


import "./App.css"

export default function App() {
  const router = useRoutes(routes)
  return (
    <div className="d-flex flex-row justify-content-between">
      <Sidebar />
      <div className="main d-flex flex-column m-1 p-3 p-md-4 bg-white ">
        <Header />
        {router}
      </div>

    </div>
  )
}
