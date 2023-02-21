import React, { useEffect, useState } from 'react'
import "./ProductsTable.css"
import DeleteModal from "../../Components/DeleteModal/DeleteModal"
import DetailModals from '../DetailModals/DetailModals'
import EditModal from '../../Components/EditModal/EditModal';
import ErrorBox from '../../Components/ErrorBox/ErrorBox'
export default function ProductsTable() {
    const [isShowDeleteModal, setIsShowDeleteModal] = useState(false)
    const [isShowDetailModal, setIsShowDetailModal] = useState(false)
    const [isShowEditModal, setIsShowEditModal] = useState(false)
    const [allProducts, setAllProducts] = useState([])
    const [productID, setProductID] = useState(null)

    const [productDetail, setProductDetail] = useState({})

    const [productsNewTitle, setProductsNewTitle] = useState("")
    const [productsNewPrice, setProductsNewPrice] = useState("")
    const [productsNewCount, setProductsNewCount] = useState("")
    const [productsNewImg, setProductsNewImg] = useState("")
    const [productsNewPopularity, setProductsNewPopularity] = useState("")
    const [productsNewSale, setProductsNewSale] = useState("")
    const [productsNewColors, setProductsNewColors] = useState("")
    useEffect(() => {
        getAllProducts()
    }, [])

    const getAllProducts = () => {
        fetch("http://localhost:8000/api/products/")
            .then(res => res.json())
            .then(products => setAllProducts(products))
    }

    const deleteModalCancel = () => {
        setIsShowDeleteModal(false)
    }

    const deleteModalSubmit = () => {

        fetch(`http://localhost:8000/api/products/${productID}`, { method: 'DELETE' })
            .then(res => res.json())
            .then(data => {
                setIsShowDeleteModal(false)
                getAllProducts()
            })

    }

    const closeDetailModal = () => {
        setIsShowDetailModal(false)
    }

    const closeEditModal = () => {
        setIsShowEditModal(false)
    }
    const submitEditModal = () => {
        

        const productNewDate = {
            title: productsNewTitle,
            price: productsNewPrice,
            count: productsNewCount,
            img: productsNewImg,
            popularity: productsNewPopularity,
            sale: productsNewSale,
            colors: productsNewColors
        }
        fetch(`http://localhost:8000/api/products/${productID}`, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(productNewDate)
        }).then(res => res.json())
            .then(result => {
                setIsShowEditModal(false)
                getAllProducts()
            })


    }

    return (
        <>
            <div className='mt-3 '>
                <div className="table-responsive">
                    {
                        allProducts.length ? (<table className="table  text-center">
                            <thead>
                                <tr>
                                    <th className='fw-bold'>عکس</th>
                                    <th className='fw-bold'>اسم</th>
                                    <th className='fw-bold'>قیمت</th>
                                    <th className='fw-bold'>موجودی</th>
                                    <th className='fw-bold'>عملیات</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allProducts.map((pr) => (
                                        <tr key={pr.id} style={{ verticalAlign: "middle" }}>
                                            <td>
                                                <img className='tb-pr-img' src={pr.img} alt="" />
                                            </td>
                                            <td>
                                                {pr.title}
                                            </td>
                                            <td>
                                                {pr.price}
                                            </td>
                                            <td>
                                                {pr.count}
                                            </td>
                                            <td>
                                                <div className='d-flex justify-content-center'>
                                                    <button className="btn text-white ms-2 btn-sm btn-success" onClick={() => {
                                                        setIsShowDetailModal(true)
                                                        setProductDetail(pr)
                                                    }}
                                                    >جزئیات</button>
                                                    <button className="btn text-white ms-2 btn-sm btn-danger" onClick={() => {
                                                        setIsShowDeleteModal(true)
                                                        setProductID(pr.id)
                                                    }}>حذف</button>
                                                    <button className="btn text-white ms-2 btn-sm btn-primary" onClick={() => {
                                                        setIsShowEditModal(true)
                                                        setProductID(pr.id)
                                                        setProductDetail(pr)
                                                        setProductsNewTitle(pr.title)
                                                        setProductsNewPrice(pr.price)
                                                        setProductsNewCount(pr.count)
                                                        setProductsNewImg(pr.img)
                                                        setProductsNewPopularity(pr.popularity)
                                                        setProductsNewSale(pr.sale)
                                                        setProductsNewColors(pr.colors)
                                                        
                                                    }}
                                                    >ویرایش</button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </table>) : (
                            <ErrorBox msg="هیچ محصولی یافت نشد!" />
                        )
                    }
                </div>
            </div>

            {
                isShowDeleteModal && <DeleteModal cancel={deleteModalCancel} submit={deleteModalSubmit} />
            }

            {
                isShowDetailModal && <DetailModals onHide={closeDetailModal} >
                    <table className="table text-center">
                        <thead>
                            <tr>
                                <th>اسم</th>
                                <th>قیمت</th>
                                <th>موجودی</th>
                                <th>رنگ</th>
                                <th>محبوبیت</th>
                                <th>میزان فروش</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ verticalAlign: "middle" }}>
                                <td>
                                    {productDetail.title}
                                </td>
                                <td>
                                    {productDetail.price}
                                </td>
                                <td>
                                    {productDetail.count}
                                </td>
                                <td>
                                    {productDetail.colors}
                                </td>
                                <td>
                                    {productDetail.popularity}
                                </td>
                                <td>
                                    {productDetail.sale}
                                </td>

                            </tr>
                        </tbody>
                    </table>
                </DetailModals>

            }

            {
                isShowEditModal && <EditModal onHide={closeEditModal} submit={submitEditModal} >
                    <div className="form-row d-flex justify-content-center flex-wrap mt-2 mt-md-3">
                        <div className="form-group col-md-5 col-6 p-1">
                            <input type="text" className="form-control" placeholder="نام محصول" value={productsNewTitle} onChange={(event) => {
                                setProductsNewTitle(event.target.value)
                                
                            }} />
                        </div>
                        <div className="form-group col-md-5 col-6 p-1">
                            <input type="text" className="form-control" placeholder="قیمت محصول" value={productsNewPrice} onChange={(event) => {
                                setProductsNewPrice(event.target.value)
                            }} />
                        </div>
                        <div className="form-group col-md-5 col-6 p-1">
                            <input type="text" className="form-control" placeholder="موجودی محصول" value={productsNewCount} onChange={(event) => {
                                setProductsNewCount(event.target.value)
                            }} />
                        </div>
                        <div className="form-group col-md-5 col-6 p-1">
                            <input type="text" className="form-control" placeholder="تصویر محصول" value={productsNewImg} onChange={(event) => {
                                setProductsNewImg(event.target.value)
                            }} />
                        </div>
                        <div className="form-group col-md-5 col-6 p-1">
                            <input type="text" className="form-control" placeholder="محبوبیت محصول" value={productsNewPopularity} onChange={(event) => {
                                setProductsNewPopularity(event.target.value)
                            }} />
                        </div>
                        <div className="form-group col-md-5 col-6 p-1">
                            <input type="text" className="form-control" placeholder="میزان فروش" value={productsNewSale} onChange={(event) => {
                                setProductsNewSale(event.target.value)
                            }} />
                        </div>
                        <div className="form-group col-md-5 col-6 p-1">
                            <input type="text" className="form-control" placeholder="رنگ محصول" value={productsNewColors} onChange={(event) => {
                                setProductsNewColors(event.target.value)
                            }} />
                        </div>
                        <div className="form-group col-md-5 col-6 p-1">
                        </div>
                    </div>
                </EditModal>
            }
        </>

    )
}
