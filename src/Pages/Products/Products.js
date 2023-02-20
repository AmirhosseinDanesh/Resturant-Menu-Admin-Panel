import React from 'react'
import ErrorBox from '../../Components/ErrorBox/ErrorBox'
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
        <ErrorBox msg="هیچ محصولی یافت نشد!" />
        <ProductsTable />
      </div>
    </>
  )
}
