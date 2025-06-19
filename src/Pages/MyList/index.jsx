// import React from 'react'
// import { FaAngleUp } from "react-icons/fa6";
import AccountSidebar from "../../components/AccountSidebar";
import ListItems from "./listItems";
const MyList = () => {

    
  return (
    <section className="py-10 w-full">
        <div className="container flex gap-5">
            <div className="col1 w-[20%]">
                <AccountSidebar/>
            </div>

            <div className="col2 w-[70%]">
                 <div className="Shadow-md rounded-md bg-white">
                <div className="py-2 px-3 border-b border-[rgba(0,0,0,0.1)]">
                    <h2>My List</h2>
            <p className="mt-0">There are <span className="font-bold text-[#ff5252]">2</span> Products in My List</p>
                </div>
                <ListItems/>
                <ListItems/>
                <ListItems/>
                <ListItems/>
                <ListItems/>
                <ListItems/>
                <ListItems/>
                <ListItems/>
                <ListItems/>
            </div>
            </div>
        </div>
    </section>
  )
}

export default MyList;
