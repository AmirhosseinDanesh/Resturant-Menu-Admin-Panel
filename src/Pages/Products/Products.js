import React ,{useState , useEffect} from 'react'
import AddNewProducts from "../../Components/AddNewProducts/AddNewProducts"
import ProductsTable from '../../Components/ProductsTable/ProductsTable'
import "./Products.css"

export default function Products() {
  const [allProducts, setAllProducts] = useState([])
  useEffect(() => {
    getAllProducts()
  }, [])

  const getAllProducts = () => {
    fetch("https://mdresturant.iran.liara.run/api/products/")
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
