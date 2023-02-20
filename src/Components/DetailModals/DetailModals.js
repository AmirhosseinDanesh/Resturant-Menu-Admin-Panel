import React, { useEffect } from 'react'

export default function DetailModals({ onHide }) {
    useEffect(() => {
        var modal = document.querySelector('.modal');
        const escape = (e) => {
            if (e.keyCode === 27) {
                onHide()
            }
        }
        window.addEventListener("keydown", escape)
        
        const clickOnSpace = (event)=>{
            if (event.target == modal) {
                onHide()
            }
        }
        window.addEventListener("click", clickOnSpace)

        return () => {

            window.removeEventListener("keydown", escape)
            window.removeEventListener("click", clickOnSpace)
            
        }
    })
    return (
        <div className="modal show fade" tabIndex="-1" role="dialog" >
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title fw-bold ">جزئیات محصول</h5>
                        <button type="button" className="close btn" onClick={() => onHide()}>
                            <span className='close-modal' aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className='modal-body'>
                        <table className="table  text-center">
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
                                        آیفون 13
                                    </td>
                                    <td>
                                        2100000
                                    </td>
                                    <td>
                                        6
                                    </td>
                                    <td>
                                        قرمز
                                    </td>
                                    <td>
                                        40%
                                    </td>
                                    <td>
                                        4
                                    </td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
