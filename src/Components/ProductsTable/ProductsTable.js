import React, { useState } from 'react'
import "./ProductsTable.css"
import DeleteModal from "../../Components/DeleteModal/DeleteModal"
import DetailModals from '../DetailModals/DetailModals'
import EditModal from '../../Components/EditModal/EditModal';

export default function ProductsTable() {
    const [isShowDeleteModal, setIsShowDeleteModal] = useState(false)
    const [isShowDetailModal, setIsShowDetailModal] = useState(false)
    const [isShowEditModal , setIsShowEditModal] = useState(false)

    const deleteModalCancel = () => {
        setIsShowDeleteModal(false)
    }
    
    const deleteModalSubmit = () => {
        setIsShowDeleteModal(false)
    }

    const closeDetailModal = ()=>{
        setIsShowDetailModal(false)
    }
    
    const closeEditModal = ()=>{
        setIsShowEditModal(false)
    }
    const submitEditModal = ()=>{
        setIsShowEditModal(false)

    }

    return (
        <>
            <div className='mt-3 '>
                <div className="table-responsive">
                    <table className="table  text-center">
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
                            <tr style={{ verticalAlign: "middle" }}>
                                <td>
                                    <img className='tb-pr-img' src="./Images/iphone13.jpg" alt="" />
                                </td>
                                <td>
                                    آیفون 13
                                </td>
                                <td>
                                    2100000
                                </td>
                                <td>
                                    5
                                </td>
                                <td>
                                    <div className='d-flex justify-content-center'>
                                        <button className="btn text-white ms-2 btn-sm btn-success" onClick={()=> setIsShowDetailModal(true)}>جزئیات</button>
                                        <button className="btn text-white ms-2 btn-sm btn-danger" onClick={() => setIsShowDeleteModal(true)}>حذف</button>
                                        <button className="btn text-white ms-2 btn-sm btn-primary" onClick={()=> setIsShowEditModal(true)}>ویرایش</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {
                isShowDeleteModal && <DeleteModal cancel={deleteModalCancel} submit={deleteModalSubmit}/>
            }

            {
                isShowDetailModal && <DetailModals onHide={closeDetailModal} />
            }

            {
                isShowEditModal && <EditModal onHide={closeEditModal} submit={submitEditModal} />  
            }
        </>

    )
}
