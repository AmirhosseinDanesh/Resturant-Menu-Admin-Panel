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
        console.log(productID)
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
        setIsShowEditModal(false)

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
                                                    <button className="btn text-white ms-2 btn-sm btn-primary" onClick={() => setIsShowEditModal(true)}>ویرایش</button>
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
                isShowEditModal && <EditModal onHide={closeEditModal} submit={submitEditModal} />
            }
        </>

    )
}
