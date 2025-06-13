// import React from 'react'
import { Link } from "react-router-dom";
import "../ProductItem/style.css";
import Rating from '@mui/material/Rating';
import  Button  from "@mui/material/Button";
import { FaRegHeart } from "react-icons/fa";
import { IoGitCompareOutline } from "react-icons/io5";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { IoMdOpen } from "react-icons/io";
import Tooltip from '@mui/material/Tooltip';
import { useContext } from "react";
import { MyContext } from "../../App";




const ProductItem = () => {

    const context = useContext(MyContext);

  return (
    <div className="productsSlider py-5 w-full max-w-screen-xl mx-auto">
        <div className=" border-1 border-[rgba(0,0,0,0.1)] rounded-lg shadow-md p-2 w-50">
            <div className="group relative">
                <Link to="/productDetails/84758">
                    <div className="img  h-[220px] overflow-hidden">
                        <img
                            alt="image"
                            className="w-full h-[220px] object-contain object-left rounded-t-lg"
                            // src="https://api.spicezgold.com/download/file_1734527098974_poco-c61-4gb-ram-64gb-rom-ethereal-blue-smartphone-product-images-orvmh0bwivm-p608625324-0-202403291512.webp"
                            // src="https://api.spicezgold.com/download/file_1734526007829_hp-15-fc0154au-laptop-amd-ryzen-3-7320u-8gb-ddr5-5500-sdram-512gb-ssd-amd-radeon-graphics-windows-11-mso-fhd-39-6-cm-15-6-inch-natural-silver-1-59-kgs-1080p-web-cam-digital-o494352995-p608658148-0-20240402160.webp"
                           src="https://m.media-amazon.com/images/I/71Zi-z2FtCL._SX679_.jpg"
                        />
                        <img 
                            alt="image" 
                            className="w-full absolute transition-all duration-700 top-0 left-0 opacity-0 hover:opacity-100 scale-100" 
                            // src="https://api.spicezgold.com/download/file_1734527098974_poco-c61-4gb-ram-64gb-rom-ethereal-blue-smartphone-product-images-orvmh0bwivm-p608625324-1-202403291512.jpg"
                            src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ16bmrmTA0rRoKfpVFNYe4N4rDXonVeCAk-t9msoIigNmxa8gm3inC2WD6yJTD-6J1DJtTIrUL95ELTO5NWRhg9su3-5sq5vlpRwngrK9znQilAfZi194p&usqp=CAc"
                        />
                    </div>
                </Link>
                <span className="discount flex item-center absolute top-[10px] left-[10px] z-50 bg-[#ff5252] text-white text-xs px-2 py-1 rounded-full">10%</span>

                {/* Right side tags of image  */}

                <div className="actions absolute top-[-10px] right-[5px] z-50 flex items-center gap-2 flex-col w-[50px] transition-all duration-500 group-hover:top-[10px] opacity-0 hover:opacity-100">
                    <Tooltip title="Details" placement="left-start">
                        <Button className="!w-[30px] !h-[30px] !text-black !min-w-[30px] !rounded-full !bg-white hover:!bg-[#ff5252]  group" onClick={()=>context.setOpenProductDetailsModal(true)}>
                            <MdOutlineZoomOutMap className="text-[18px] hover:text-white"/>
                        </Button>
                    </Tooltip>

                    <Tooltip title="Like" placement="left-start">
                        <Button className="!w-[30px] !h-[30px] !min-w-[30px] !text-black !rounded-full !bg-white hover:!bg-[#ff5252]  group">
                            <FaRegHeart className="text-[18px] hover:text-white"/>
                        </Button>
                    </Tooltip>

                    <Tooltip title="Compare" placement="left-start">
                        <Button className="!w-[30px] !h-[30px] !min-w-[30px] !text-black !rounded-full !bg-white hover:!bg-[#ff5252] group">
                            <IoGitCompareOutline className="text-[18px]  hover:text-white"/>
                        </Button>
                    </Tooltip>

                    <Tooltip title="Open" placement="left-start">
                        <Button className="!w-[30px] !h-[30px] !min-w-[30px] !text-black !rounded-full !bg-white hover:!bg-[#ff5252] group">
                            <IoMdOpen className="text-[18px] hover:text-white"/>
                        </Button>
                    </Tooltip>

                </div>
            </div>
            <div className="p-3 info py-5 ">
                <h6 className="text-[13px] !font-[400]"><Link to="/" className="link transition-all">HP branded laptop</Link></h6>
                <h2 className="font-semibold text-lg title mt-1 text-[rgba(0,0,0,0.9)]"><Link to="/" className="link transition-all text-[(#000)]">HP Laptop</Link></h2>
                <p className="text-green-600">In Stock</p>
                <div className="flex text-yellow-400 mt-1">
                    <Rating name="size-small" defaultValue={4} size="small" readOnly/>
                </div>
                <div className="flex items-center gap-4">
                    <span className="oldPrice text-gray-500 text-[16px] font-bold line-through">$180.00</span>
                    <span className="oldPrice text-red-600 text-[16px] font-[600]">$150.00</span>
                </div>
                </div>
    </div>
</div>

  )
}

export default ProductItem
