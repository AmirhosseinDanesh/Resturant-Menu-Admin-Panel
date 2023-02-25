import React, { useEffect, useState } from 'react'
import ErrorBox from "../../Components/ErrorBox/ErrorBox"
import Data from '../../Data/Data';
import DetailModals from '../../Components/DetailModals/DetailModals';
import DeleteModal from '../../Components/DeleteModal/DeleteModal';
import EditModal from "../../Components/EditModal/EditModal"
import "./Comments.css"
export default function Comments() {
  const [comments, setComments] = useState([])
  const [productComment, setProductComment] = useState("")

  const [iShowdetailModal, setIShowdetailModal] = useState(false)
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false)
  const [isShowEditModal, setIsShowEditModal] = useState(false)

  const [commentID, setCommentID] = useState(null)
  const [commentBody, setCommentBody] = useState(null)

  const closeDetailModal = () => setIShowdetailModal(false)
  const closeDeleteModal = () => setIsShowDeleteModal(false)
  const closeEditModal = () => setIsShowEditModal(false)


  const getAllComment = () => {
    fetch(`${Data.url}/comments/`)
      .then(res => res.json())
      .then(data => setComments(data))
  }

  const deleteComment = () => {
    fetch(`${Data.url}/comments/${commentID}`, { method: "DELETE" })
      .then(res => res.json())
      .then(data => getAllComment())
    closeDeleteModal()
  }



  const updateComment = () => {
    const commentNewinfo = {
      body: commentBody
    }
    fetch(`${Data.url}/comments/${commentID}`, {
      method: "PUT",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(commentNewinfo)
    }).then(res => res.json())
      .then(result => {
        closeEditModal()
        getAllComment()
      })
    closeEditModal()
  }



  useEffect(() => {
    getAllComment()
  }, [])
  return (
    <>
      <div className="">

        {
          comments.length ? (
            <div className='mt-3 '>
              <div className="table-responsive">
                <table className="table  text-center">
                  <thead>
                    <tr>
                      <th className='fw-bold'>اسم کاربر</th>
                      <th className='fw-bold'>محصول</th>
                      <th className='fw-bold'>کامنت</th>
                      <th className='fw-bold'>تاریخ</th>
                      <th className='fw-bold'>ساعت</th>
                      <th className='fw-bold'>عملیات</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      comments.map(cm => (
                        <tr key={cm.id} style={{ verticalAlign: "middle" }}>
                          <td>
                            {cm.userID}
                          </td>
                          <td>
                            {cm.productID}
                          </td>
                          <td>
                            <button className='btn btn-info text-white' onClick={() => {
                              setIShowdetailModal(true)
                              setProductComment(cm.body)
                            }}>
                              باز کردن
                            </button>
                          </td>
                          <td>
                            {cm.date}
                          </td>
                          <td>
                            {cm.hour}
                          </td>
                          <td>
                            <div className='d-flex justify-content-center'>
                              <button className="btn text-white ms-2 btn-sm btn-danger" onClick={() => {
                                setIsShowDeleteModal(true)
                                setCommentID(cm.id)
                              }}>حذف</button>
                              <button className="btn text-white ms-2 btn-sm btn-primary" onClick={() => {
                                setIsShowEditModal(true)
                                setCommentBody(cm.body)
                                setCommentID(cm.id)
                              }}>ویرایش</button>
                              <button className="btn text-white ms-2 btn-sm btn-success">پاسخ</button>
                              <button className="btn text-white ms-2 btn-sm btn-success">تایید</button>
                            </div>
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <ErrorBox msg="هیچ کامنتی یافت نشد!" />
          )
        }

      </div>
      {
        iShowdetailModal && <DetailModals onHide={closeDetailModal} >

          <p>{productComment}</p>

        </DetailModals>
      }
      {
        isShowDeleteModal && <DeleteModal cancel={closeDeleteModal} submit={deleteComment} />
      }
      {
        isShowEditModal && <EditModal onHide={closeEditModal} submit={updateComment}>

          <div className="form-group col-md-12 col-6 p-1">
            <textarea className="form-control" placeholder="ویرایش کامنت" value={commentBody} onChange={(event) => {
              setCommentBody(event.target.value)
            }} ></textarea>
          </div>

        </EditModal>
      }
    </>
  );
}
