import React, { useState } from 'react'
import Collapse from 'react-bootstrap/Collapse';
import { Link } from 'react-router-dom';

import { MdSpaceDashboard, MdOutlineHomeMax } from "react-icons/md"
import { CgDatabase } from "react-icons/cg"
import { RxCodesandboxLogo } from "react-icons/rx"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { FaUsers, FaComment, FaDollarSign } from "react-icons/fa"
import { BiChevronLeft } from "react-icons/bi"

import "./Sidebar.css"


export default function Sidebar() {
    const [open, setOpen] = useState(true);
    const [open2, setOpen2] = useState(true);
    return (
        <div className="sidebar d-flex flex-column justify-content-between  ">
            <div className='mt-1 '>
                <div className="sb-profile d-flex align-items-center p-md-3 justify-content-center flex-column text-center">
                    <div className="sb-profile_img mb-2">
                        <img src="./Images/profile.png" alt="" />
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
                <div className="sb-list py-md-3 py-2">
                    <div className='m-md-2 sb-list-item'>
                        <div className={`sb-title-list d-flex align-items-center justify-content-between ms-1 ${open ? "active" : ""
                            } `}
                            onClick={() => { setOpen(!open) }}
                            aria-controls="example-collapse-text"
                            aria-expanded={open}
                        >
                            <span className='d-flex align-items-center'>
                                <MdSpaceDashboard className='icons' style={{ fontSize: "0.9rem", marginLeft: "0.5rem" }} />
                                پیشخوان
                            </span>
                            <BiChevronLeft className='sb-menu-icon-left' />
                        </div>
                        <Collapse in={open}>
                            <Link to="/" className='sb-li sb-icon text-decoration-none text-white' id="example-collapse-text">
                                    صفحه اصلی
                                    <MdOutlineHomeMax className='icons' style={{ fontSize: "0.9rem" }} />
                            </Link>
                        </Collapse>
                    </div>
                    <div className='m-md-2 py-2 mb-md-4 sb-list-item'>
                        <div className={`sb-title-list d-flex align-items-center justify-content-between ms-1 mb-md-2 ${open2 ? "active" : ""} `}
                            onClick={() => { setOpen2(!open2) }}
                            aria-controls="example-collapse-text"
                            aria-expanded={open2}
                        >
                            <span className='d-flex align-items-center'>
                                <CgDatabase className='icons' style={{ fontSize: "0.9rem", marginLeft: "0.5rem" }} />
                                مدیریت پنل
                            </span>
                            <BiChevronLeft className='sb-menu-icon-left' />
                        </div>
                        <Collapse in={open2}>
                            <ul className='' id="example-collapse-text ">
                                <Link to="/products" className='sb-li sb-icon text-decoration-none text-white'>
                                    محصولات
                                    <RxCodesandboxLogo className='icons' style={{ fontSize: "0.9rem" }} />
                                </Link>
                                <Link to="/orders" className='sb-li sb-icon text-decoration-none text-white'>
                                    سفارشات
                                    <AiOutlineShoppingCart className='icons' style={{ fontSize: "0.9rem" }} />
                                </Link>
                                <Link to="/users" className='sb-li sb-icon text-decoration-none text-white'>
                                    کاربران
                                    <FaUsers className='icons' style={{ fontSize: "0.9rem" }} />
                                </Link>
                                <Link to="/comments" className='sb-li sb-icon text-decoration-none text-white'>
                                    کامنت ها
                                    <FaComment className='icons' style={{ fontSize: "0.9rem" }} />
                                </Link>
                                <Link to="/offs" className='sb-li sb-icon text-decoration-none text-white'>
                                    تخفیف ها
                                    <FaDollarSign className='icons' style={{ fontSize: "0.9rem" }} />
                                </Link>
                            </ul>
                        </Collapse>

                    </div>
                </div>
            </div>
            {/* <div className="sb-git text-center d-flex justify-content-center">
                <div className='d-flex justify-content-around w-25'>
                    <a className='text-decoration-none ' href='https://github.com/AmirhosseinDanesh'>
                    <FiGithub style={{marginLeft:"3px"}}/>
                        GitHub
                    </a>
                </div>
            </div> */}
        </div>
    )
}
