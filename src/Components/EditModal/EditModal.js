import React, { useEffect } from 'react'

export default function EditModal({ onHide, submit }) {
    useEffect(() => {
        var modal = document.querySelector('.modal');
        const escape = (e) => {
            if (e.keyCode === 27) {
                onHide()
            }
        }
        window.addEventListener("keydown", escape)

        const clickOnSpace = (event) => {
            if (event.target === modal) {
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
        <div className="modal show fade" tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title fw-bold">اطلاعات جدید را وارد کنید</h5>
                        <button type="button" className="close btn" aria-label="Close" onClick={() => onHide()}>
                            <span className='close-modal' aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div className="modal-footer">
                        <form action="#">
                            <div className="form-row d-flex justify-content-around mt-2 mt-md-3">
                                <div className="form-group col-md-5 col-6 p-1">
                                    <input type="email" className="form-control" placeholder="نام محصول" />
                                </div>
                                <div className="form-group col-md-5 col-6 p-1">
                                    <input type="password" className="form-control" placeholder="قیمت محصول" />
                                </div>
                            </div>
                            <div className="form-row d-flex justify-content-around mt-2 mt-md-3">
                                <div className="form-group col-md-5 col-6 p-1">
                                    <input type="email" className="form-control" placeholder="موجودی محصول" />
                                </div>
                                <div className="form-group col-md-5 col-6 p-1">
                                    <input type="password" className="form-control" placeholder="تصویر محصول" />
                                </div>
                            </div>
                            <div className="form-row d-flex justify-content-around mt-2 mt-md-3">
                                <div className="form-group col-md-5 col-6 p-1">
                                    <input type="email" className="form-control" placeholder="محبوبیت محصول" />
                                </div>
                                <div className="form-group col-md-5 col-6 p-1">
                                    <input type="password" className="form-control" placeholder="میزان فروش" />
                                </div>
                            </div>
                            <div className="form-row d-flex justify-content-around mt-2 mt-md-3">
                                <div className="form-group col-md-5 col-6 p-1">
                                    <input type="email" className="form-control" placeholder="رنگ محصول" />
                                </div>
                                <div className="form-group col-md-5 col-6 p-1 d-flex justify-content-end">
                                    <button className='btn pr-submit-btn text-white bg-primary' onClick={() => submit()}>
                                        ثبت
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
