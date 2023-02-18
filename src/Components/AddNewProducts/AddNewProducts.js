import React from 'react'

export default function AddNewProducts() {
    return (
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
                    <button className='btn pr-submit-btn text-white bg-primary '>
                        ثبت
                    </button>
                </div>
            </div>
        </form>
    )
}
