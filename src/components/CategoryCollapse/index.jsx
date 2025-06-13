// import React from 'react'
import { FaRegSquareMinus } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaRegPlusSquare } from "react-icons/fa";
import { Button } from '@mui/material';
import { useState } from 'react';

const CategoryCollapse = () => {
     const [submenuIndex, setSubmeuIndex] = useState(null);
    const [innerSubmenuIndex, setInnerSubmeuIndex] = useState(null);

    //for outer submenu
    const openSubmenu=(index) =>{
        if(submenuIndex===index){
            setSubmeuIndex(null);
        }
        else{
            setSubmeuIndex(index);
        }
    }
    //for inner submenu
    const InnerOpenSubmenu=(index) =>{
        if(innerSubmenuIndex===index){
            setInnerSubmeuIndex(null);
        }
        else{
            setInnerSubmeuIndex(index);
        }
    }
  return (
    <>
        <div className='scroll'>
            <ul className='w-full'>
                {/*list 0*/}
                <li className='list-none flex items-center relative flex-col'>
                    <Link to="/" className='w-full'>
                        <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>Fashion</Button>
                    </Link>
                    {
                        submenuIndex===0 ? 
                        <FaRegSquareMinus className='absolute top-[10px] right-[15px] cursor-pointer' onClick={()=>openSubmenu(0)}/>
                        :
                        <FaRegPlusSquare className='absolute top-[10px] right-[15px] cursor-pointer' onClick={()=>openSubmenu(0)}/>
                    }                   
                    {
                            submenuIndex===0 && 
                        <ul className='submenu w-full pl-3 '>
                            <li className='list-none relative'>
                                <Link to="/" className='w-full'>
                                    <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>Apparel</Button>
                                </Link>
                                {
                                    innerSubmenuIndex===0 ? 
                                    <FaRegSquareMinus className='absolute top-[10px] right-[15px] cursor-pointer' onClick={()=>InnerOpenSubmenu(0)}/>
                                    :
                                    <FaRegPlusSquare className='absolute top-[10px] right-[15px] cursor-pointer' onClick={()=>InnerOpenSubmenu(0)}/>
                                }                                          {
                                        innerSubmenuIndex===0 && 
                                            <ul className='inner_submenu w-full pl-3 '>
                                                <li className='list-none relative mb-1'>
                                                    <Link to="/" className=' link w-full !text-left !justify-start !px-3 transition text-[14px] '>Smart Tablet</Link>
                                                </li>
                                                <li className='list-none relative mb-1'>
                                                    <Link to="/" className=' link w-full !text-left !justify-start !px-3 transition text-[14px] '>Crepe T-Shirt</Link>
                                                </li>
                                                <li className='list-none relative mb-1'>
                                                    <Link to="/" className=' link w-full !text-left !justify-start !px-3 transition text-[14px] '>Leather Watch</Link>
                                                </li>
                                                <li className='list-none relative mb-1'>
                                                    <Link to="/" className=' link w-full !text-left !justify-start !px-3 transition text-[14px] '>Rolling Dimond</Link>
                                                </li>
                                            </ul>
                                    }
                                    
                            </li>
                        </ul>
                    }
                </li>
                {/*list1*/}
                <li className='list-none flex items-center relative flex-col'>
                    <Link to="/" className='w-full'>
                        <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>Outerwear</Button>
                    </Link>
                    {
                        submenuIndex===1 ? 
                        <FaRegSquareMinus className='absolute top-[10px] right-[15px] cursor-pointer' onClick={()=>openSubmenu(1)}/>
                        :
                        <FaRegPlusSquare className='absolute top-[10px] right-[15px] cursor-pointer' onClick={()=>openSubmenu(1)}/>
                    }                   
                    {
                            submenuIndex===1 && 
                        <ul className='submenu w-full pl-3 '>
                            <li className='list-none relative'>
                                <Link to="/" className='w-full'>
                                    <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>Apparel</Button>
                                </Link>
                                {
                                    innerSubmenuIndex===1 ? 
                                    <FaRegSquareMinus className='absolute top-[10px] right-[15px] cursor-pointer' onClick={()=>InnerOpenSubmenu(1)}/>
                                    :
                                    <FaRegPlusSquare className='absolute top-[10px] right-[15px] cursor-pointer' onClick={()=>InnerOpenSubmenu(1)}/>
                                }                                          {
                                        innerSubmenuIndex===1 && 
                                            <ul className='inner_submenu w-full pl-3 '>
                                                <li className='list-none relative mb-1'>
                                                    <Link to="/" className=' link w-full !text-left !justify-start !px-3 transition text-[14px] '>Smart Tablet</Link>
                                                </li>
                                                <li className='list-none relative mb-1'>
                                                    <Link to="/" className=' link w-full !text-left !justify-start !px-3 transition text-[14px] '>Crepe T-Shirt</Link>
                                                </li>
                                                <li className='list-none relative mb-1'>
                                                    <Link to="/" className=' link w-full !text-left !justify-start !px-3 transition text-[14px] '>Leather Watch</Link>
                                                </li>
                                                <li className='list-none relative mb-1'>
                                                    <Link to="/" className=' link w-full !text-left !justify-start !px-3 transition text-[14px] '>Rolling Dimond</Link>
                                                </li>
                                            </ul>
                                    }
                                    
                            </li>
                        </ul>
                    }
                </li>
            </ul>
        </div>
    </>
  )
}

export default CategoryCollapse
