import React, { useState, useEffect } from 'react'
import "./Users.css"
import DeleteModal from "../../Components/DeleteModal/DeleteModal"
import DetailModals from '../../Components/DetailModals/DetailModals'
import EditModal from '../../Components/EditModal/EditModal';
import ErrorBox from '../../Components/ErrorBox/ErrorBox'
import Data from '../../Data/Data';
export default function Users() {
  const [allUsers, setAllUsers] = useState([])

  useEffect(() => {
    getAllUsers()
  }, [])

  const getAllUsers = () => {
    fetch(`${Data.url}/users/`)
      .then(res => res.json())
      .then(users => setAllUsers(users))

  }
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false)
  const [isShowDetailModal, setIsShowDetailModal] = useState(false)
  const [isShowEditModal, setIsShowEditModal] = useState(false)

  const [usersID, setUsersID] = useState(null)

  const [usersDetail, setUsersDetail] = useState({})

  const [usersNewfirsname, setusersNewfirsname] = useState("")
  const [usersNewlastname, setusersNewlastname] = useState("")
  const [usersNewusername, setusersNewusername] = useState("")
  const [usersNewpassword, setusersNewpassword] = useState("")
  const [usersNewphone, setusersNewphone] = useState("")
  const [usersNewcity, setusersNewcity] = useState("")
  const [usersNewemail, setusersNewemail] = useState("")
  const [usersNewaddress, setusersNewaddress] = useState("")
  const [usersNewscore, setusersNewscore] = useState("")
  const [usersNewbuy, setusersNewbuy] = useState("")



  const deleteModalCancel = () => {
    setIsShowDeleteModal(false)
  }

  const deleteModalSubmit = () => {

    fetch(`${Data.url}/users/${usersID}`, { method: 'DELETE' })
      .then(res => res.json())
      .then(data => {
        setIsShowDeleteModal(false)
        getAllUsers()
      })

  }

  const closeDetailModal = () => {
    setIsShowDetailModal(false)
  }

  const closeEditModal = () => {
    setIsShowEditModal(false)
  }
  const submitEditModal = () => {

    const usersNewData = {
      firsname: usersNewfirsname,
      lastname: usersNewlastname,
      username: usersNewusername,
      password: usersNewpassword,
      phone: usersNewphone,
      city: usersNewcity,
      email: usersNewemail,
      address: usersNewaddress,
      score: usersNewscore,
      buy: usersNewbuy,
    }
    fetch(`${Data.url}/users/${usersID}`, {
      method: "PUT",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(usersNewData)
    }).then(res => res.json())
      .then(result => {
        setIsShowEditModal(false)
        getAllUsers()
      })


  }

  return (
    <>
      <div className='mt-3 '>
        <div className="table-responsive">
          {
            allUsers.length ? (<table className="table  text-center">
              <thead>
                <tr>
                  <th className='fw-bold'>?????? ????????????</th>
                  <th className='fw-bold'>?????????? ???????? ??????????</th>
                  <th className='fw-bold'>?????????? ??????????</th>
                  <th className='fw-bold'>?????????? ???????? ??????????</th>
                  <th className='fw-bold'>????????????</th>
                </tr>
              </thead>
              <tbody>
                {
                  allUsers.map((user) => (
                    <tr key={user.id} style={{ verticalAlign: "middle" }}>
                      <td>
                        {user.username}
                      </td>
                      <td>
                        {user.phone}
                      </td>
                      <td>
                        {user.email}
                      </td>
                      <td>
                        {user.buy}
                      </td>
                      
                      <td>
                        <div className='d-flex justify-content-center'>
                          <button className="btn text-white ms-2 btn-sm btn-info" onClick={() => {
                            setIsShowDetailModal(true)
                            setUsersDetail(user)
                          }}
                          >????????????</button>
                          <button className="btn text-white ms-2 btn-sm btn-danger" onClick={() => {
                            setIsShowDeleteModal(true)
                            setUsersID(user.id)
                          }}>??????</button>
                          <button className="btn text-white ms-2 btn-sm btn-primary" onClick={() => {
                            setIsShowEditModal(true)
                            setUsersID(user.id)
                            setUsersDetail(user)
                            setusersNewfirsname(user.firsname)
                            setusersNewlastname(user.lastname)
                            setusersNewusername(user.username)
                            setusersNewpassword(user.password)
                            setusersNewphone(user.phone)
                            setusersNewcity(user.city)
                            setusersNewemail(user.email)
                            setusersNewaddress(user.address)
                            setusersNewscore(user.score)
                            setusersNewbuy(user.buy)
                          }}
                          >????????????</button>
                        </div>
                      </td>
                    </tr>
                  )).reverse()
                }

              </tbody>
            </table>) : (
              <ErrorBox msg="?????? ???????????? ???????? ??????!" />
            )
          }
        </div>
      </div>

      {
        isShowDeleteModal && <DeleteModal cancel={deleteModalCancel} submit={deleteModalSubmit} title={"?????? ???? ?????? ?????????? ?????????????? ????????????"} />
      }

      {
        isShowDetailModal && <DetailModals onHide={closeDetailModal} >
          <table className="table text-center">
            <thead>
              <tr>
                <th>??????</th>
                <th>?????? ????????????????</th>
                <th>??????</th>
                <th>??????</th>
                <th>????????</th>
                <th>????????????</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ verticalAlign: "middle" }}>
                <td>{usersDetail.firsname}</td>
                <td>{usersDetail.lastname}</td>
                <td>{usersDetail.password}</td>
                <td>{usersDetail.city}</td>
                <td>{usersDetail.address}</td>
                <td>{usersDetail.score}</td>

              </tr>
            </tbody>
          </table>
        </DetailModals>

      }

      {
        isShowEditModal && <EditModal onHide={closeEditModal} submit={submitEditModal} >
          <div className="form-row d-flex justify-content-center flex-wrap mt-2 mt-md-3">
            <div className="form-group col-md-5 col-6 p-1">
              <input type="text" className="form-control" placeholder="firsname" value={usersNewfirsname} onChange={(event) => {
                setusersNewfirsname(event.target.value)

              }} />
            </div>
            <div className="form-group col-md-5 col-6 p-1">
              <input type="text" className="form-control" placeholder="lastname" value={usersNewlastname.toLocaleString()} onChange={(event) => {
                setusersNewlastname(event.target.value)
              }} />
            </div>
            <div className="form-group col-md-5 col-6 p-1">
              <input type="text" className="form-control" placeholder="username" value={usersNewusername} onChange={(event) => {
                setusersNewusername(event.target.value)
              }} />
            </div>
            <div className="form-group col-md-5 col-6 p-1">
              <input type="text" className="form-control" placeholder="password" value={usersNewpassword} onChange={(event) => {
                setusersNewpassword(event.target.value)
              }} />
            </div>
            <div className="form-group col-md-5 col-6 p-1">
              <input type="text" className="form-control" placeholder="phone" value={usersNewphone} onChange={(event) => {
                setusersNewphone(event.target.value)
              }} />
            </div>
            <div className="form-group col-md-5 col-6 p-1">
              <input type="text" className="form-control" placeholder="city" value={usersNewcity} onChange={(event) => {
                setusersNewcity(event.target.value)
              }} />
            </div>
            <div className="form-group col-md-5 col-6 p-1">
              <input type="text" className="form-control" placeholder="email" value={usersNewemail} onChange={(event) => {
                setusersNewemail(event.target.value)
              }} />
            </div>
            <div className="form-group col-md-5 col-6 p-1">
              <input type="text" className="form-control" placeholder="address" value={usersNewaddress} onChange={(event) => {
                setusersNewaddress(event.target.value)
              }} />
            </div>
            <div className="form-group col-md-5 col-6 p-1">
              <input type="text" className="form-control" placeholder="score" value={usersNewscore} onChange={(event) => {
                setusersNewscore(event.target.value)
              }} />
            </div>
            <div className="form-group col-md-5 col-6 p-1">
              <input type="text" className="form-control" placeholder="buy" value={usersNewbuy} onChange={(event) => {
                setusersNewbuy(event.target.value)
              }} />
            </div>
            
          </div>
        </EditModal>
      }
    </>

  )
}
