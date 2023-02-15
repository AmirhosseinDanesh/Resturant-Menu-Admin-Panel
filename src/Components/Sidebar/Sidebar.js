import React, { useState } from 'react'
import "./Sidebar.css"
import { MdSpaceDashboard, MdOutlineHomeMax } from "react-icons/md"
import { CgDatabase } from "react-icons/cg"
import { RxCodesandboxLogo } from "react-icons/rx"
import { AiOutlineShoppingCart, AiOutlineLeft } from "react-icons/ai"
import { FaUsers, FaComment, FaDollarSign } from "react-icons/fa"
import { BiChevronLeft } from "react-icons/bi"
import Collapse from 'react-bootstrap/Collapse';



export default function Sidebar() {
    const [open, setOpen] = useState(true);
    const [open2, setOpen2] = useState(true);

    return (
        <div className="sidebar text-white">
            <div className="sb-profile d-flex align-items-center p-md-3 justify-content-center flex-column text-center">
                <div className="sb-profile_img mb-2">
                    <img src="./Images/profile.png" alt="" width={"50px"} />
                </div>
                <div className="sb-profile_info d-flex flex-column justify-content-center align-items-center p-md-2 ">
                    <span className='sb-profile_info_name mb-2 p-md-1 mb-md-2'>
                        امیرحسین دانش
                    </span>
                    <span className='sb-profile_info_position mb-2 p-md-1'>
                        مدیریت کل
                    </span>
                </div>
            </div>
            <div className="sb-list p-md-3">
                <div className='m-md-2 py-2 '>
                    <div className='sb-title-list d-flex align-items-center justify-content-between ms-1 mb-md-2'
                        onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}>
                        <span className='d-flex align-items-center'>
                            <MdSpaceDashboard style={{ fontSize: "1.3rem", marginLeft: "0.5rem" }} />
                            پیشخوان
                        </span>
                        <BiChevronLeft />
                    </div>
                    <Collapse in={open}>
                        <li className='sb-li sb-icon' id="example-collapse-text">
                            صفحه اصلی
                            <MdOutlineHomeMax style={{ fontSize: "1.3rem" }} />
                        </li>
                    </Collapse>
                </div>
                <div className='m-md-2 '>
                    <div className='sb-title-list d-flex align-items-center justify-content-between ms-1 mb-md-2' 
                        onClick={() => setOpen2(!open2)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open2}
                        >
                        <span className='d-flex align-items-center'>
                            <CgDatabase style={{ fontSize: "1.3rem", marginLeft: "0.5rem" }} />
                            مدیریت پنل
                        </span>
                        <BiChevronLeft />
                    </div>
                    <Collapse in={open2}>
                        <ul className='' id="example-collapse-text ">
                            <li className='sb-li sb-icon'>
                                محصولات
                                <RxCodesandboxLogo style={{ fontSize: "1.3rem" }} />
                            </li>
                            <li className='sb-li sb-icon'>
                                سفارشات
                                <AiOutlineShoppingCart style={{ fontSize: "1.3rem" }} />
                            </li>
                            <li className='sb-li sb-icon'>
                                کاربران
                                <FaUsers style={{ fontSize: "1.3rem" }} />
                            </li>
                            <li className='sb-li sb-icon'>
                                کامنت ها
                                <FaComment style={{ fontSize: "1.3rem" }} />
                            </li>
                            <li className='sb-li sb-icon'>
                                تخفیف ها
                                <FaDollarSign style={{ fontSize: "1.3rem" }} />
                            </li>
                        </ul>
                    </Collapse>

                </div>
            </div>
        </div>
    )
}
