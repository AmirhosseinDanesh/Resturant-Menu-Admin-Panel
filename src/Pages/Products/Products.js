import React from 'react'
import AddNewProducts from "../../Components/AddNewProducts/AddNewProducts"
import ProductsTable from '../../Components/ProductsTable/ProductsTable'
import "./Products.css"

export default function Products() {
  return (
    <>

      <div className='mt-3'>
        <AddNewProducts />
      </div>
      <div className="mt-3">
        <ProductsTable />
      </div>
    </>
  )
}
