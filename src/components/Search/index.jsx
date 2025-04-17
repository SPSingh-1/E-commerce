// import React from 'react'
import "../Search/style.css"
import { IoSearch } from "react-icons/io5";
import Button from '@mui/material/Button';
const Search = () => {
  return (
    <div className="searchBox w-[100%] h-[50px] bg-[#e5e5e5] rounded-[5px] relative p-2">
        <input type="text" placeholder="Search for product..." className=" p-[20px] w-full h-[35px] 
        focus:outline-none bg-inherit text-[15px] !important"/>
        <Button className="!absolute top-[8px] right-[5px] z-50 !w-[37px] !min-w-[37px] h-[37px] !rounded-full !text-black">
          <IoSearch className="text-[#555454] text-[22px]" />
        </Button>
    </div>
 )
}

export default Search
