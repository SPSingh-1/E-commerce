import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
import PropTypes from "prop-types";
import { IoMdClose } from "react-icons/io";
import { FaRegPlusSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaRegSquareMinus } from "react-icons/fa6";




// import { useState } from 'react';

const CategoryPanel = (props) => {
    
    const [submenuIndex, setSubmeuIndex] = useState(null);
    const [innerSubmenuIndex, setInnerSubmeuIndex] = useState(null);
    const toggleDrawer = (newOpen) => () => {
        props.setIsOpenCatPanel(newOpen)
    };
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
    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" className="categoryPanel" >

            <h3 className='p-3 text-[16px] font-[500] flex items-center justify-between'>
                Shop By Categories
                <IoMdClose onClick={toggleDrawer(false)} className='cursor-pointer text-[20px]'/>
            </h3>

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
        </Box>
      );
  return (
    <>
      <Drawer open={props.isOpenCatPanel} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  )
}

// Add PropTypes validation here
CategoryPanel.propTypes = {
    openCategoryPanel: PropTypes.func.isRequired, // Ensures it's a function
    isOpenCatPanel: PropTypes.bool.isRequired, // Ensures it's a boolean
    setIsOpenCatPanel: PropTypes.bool.isRequired, // Ensures it's a boolean
  };

export default CategoryPanel
