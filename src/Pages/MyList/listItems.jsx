// import React from 'react'
import { IoMdClose } from "react-icons/io";
import Rating from '@mui/material/Rating';
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const ListItems = () => {


  return (
    <div className="cartItem w-full p-3 flex items-center gap-4 pb-5 border-b border-[rgba(0,0,0,0.1)]">
                    <div className="img w-[15%] rounded-md overflow-hidden">
                        <Link to="/product/7845" className="group">
                            <img src="https://api.spicezgold.com/download/file_1734529297929_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-0-202307260626.jpg" alt="" className="w-full group-hover:scale-105 transition-all"/>
                        </Link>
                    </div>

                    <div className="info w-[85%] relative">
                        <IoMdClose className="cursor-pointer absolute top-[0px] right-[0px] text-[22px] link transition-all"/>
                        <span className="text-[13px] ">Sangria</span>
                        <h3 className="text-[15px]"><Link className="link">A-Line Kurti With Sharara & Dupatta</Link></h3>

                        <div className="flex text-yellow-400 mt-1">
                            <Rating name="size-small" defaultValue={4} size="small" readOnly/>
                        </div>

                        <div className="flex items-center gap-4 mt-2 mb-2">
                            <span className="oldPrice text-[15px] font-[600]">$150.00</span>
                            <span className="oldPrice text-gray-500 text-[15px] font-bold line-through">$180.00</span>
                            <span className="oldPrice text-red-600 text-[15px] font-[600]">55% off</span>
                        </div>
                        <Button className="btn-org btn-sm">Add to cart</Button>
                    </div>
                </div>
  )
}

export default ListItems;
