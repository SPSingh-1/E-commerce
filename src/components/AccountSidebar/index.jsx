// import React from 'react'
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineNoteAlt } from "react-icons/md";
import { IoIosHeart } from "react-icons/io";
import { RiLogoutCircleRFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";

const AccountSidebar = () => {
  return (
    <div className="card bg-white shadow-md rounded-md sticky top-[10px]">
                    <div className="w-full p-5 flex items-center justify-center flex-col">
                        <div className="w-[110px] h-[110px] rounded-full overflow-hidden mb-4 relative group">
                            <img src="https://thumbs.dreamstime.com/b/portrait-happy-ambitious-indian-top-manager-modern-office-businessman-proud-career-achievement-smiling-young-man-339154938.jpg" className="w-full h-full object-cover"  alt="img.."/>
                            <div className="overlay w-[100%] h-[100%] absolute top-0 left-0 z-50 bg-[rgba(0,0,0,0.7)] flex items-center justify-center cursor-pointer opacity-0 transition-all group-hover:opacity-100">
                                <FaCloudUploadAlt className="text-[#fff] text-[25px]"/>
                                <input type="file" className="absolute top-0 left-0 w-full h-full opacity-0"/>
                            </div>
                        </div>

                        <h3>Rajesh Sharma</h3>
                        <h6 className="text-[13px] font-[500]">spsrajjput@gmail.com</h6>
                    </div>

                    <ul className="list-none pb-5 bg-[#f1f1f1] MyAccountTabs">
                        <li className="w-full">
                            <NavLink to="/my-account" exact={true} activeClassName="isActive">
                                <Button className="!text-left !justify-start !py-2 !px-5 w-full rounded-none flex items-center gap-2 !capitalize !text-[rgba(0,0,0,0.8)]"><FaRegUser className="text-[15px]"/>My Profile</Button>
                            </NavLink>
                        </li>
                        <li className="w-full">
                            <NavLink to="/my-list" exact={true} activeClassName="isActive">
                                <Button className="!text-left !justify-start !py-2 !px-5 w-full rounded-none flex items-center gap-2 !capitalize !text-[rgba(0,0,0,0.8)]"><IoIosHeart className="text-[17px]"/>My List</Button>
                            </NavLink>
                        </li>
                        <li className="w-full">
                            <NavLink to="/my-orders" exact={true} activeClassName="isActive">
                                <Button className="!text-left !justify-start !py-2 !px-5 w-full rounded-none flex items-center gap-2 !capitalize !text-[rgba(0,0,0,0.8)]"><MdOutlineNoteAlt className="text-[17px]"/>My Orders</Button>
                            </NavLink>
                        </li>
                        <li className="w-full">
                            <NavLink to="/logout" exact={true} activeClassName="isActive">
                                <Button className="!text-left !justify-start !py-2 !px-5 w-full rounded-none flex items-center gap-2 !capitalize !text-[rgba(0,0,0,0.8)]"><RiLogoutCircleRFill className="text-[17px]"/>Logout</Button>
                            </NavLink>
                        </li>
                    </ul>
                </div>
  )
}

export default AccountSidebar
