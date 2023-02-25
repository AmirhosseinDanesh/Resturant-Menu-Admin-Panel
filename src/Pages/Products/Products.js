import React ,{useState , useEffect} from 'react'
import AddNewProducts from "../../Components/AddNewProducts/AddNewProducts"
import ProductsTable from '../../Components/ProductsTable/ProductsTable'
import "./Products.css"
import Data from "../../Data/Data"
export default function Products() {
  const [allProducts, setAllProducts] = useState([])
  useEffect(() => {
    getAllProducts()
  }, [])

  const getAllProducts = () => {
    fetch(`${Data.url}/products/`)
      .then(res => res.json())
      .then(products => setAllProducts(products))
      
  }

  return (
    <>

      <div className='mt-3'>
        <AddNewProducts getAllProducts={getAllProducts}/>
      </div>
      <div className="mt-3">
        <ProductsTable allProducts={allProducts} getAllProducts={getAllProducts}/>
      </div>
    </>
  )
}
