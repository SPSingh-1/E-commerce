// import React from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import "../Sidebar/style.css"
import { Collapse} from 'react-collapse';
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import Button from '@mui/material/Button';
import { useState } from 'react';
import RangeSlider from 'react-range-slider-input';
import Rating from '@mui/material/Rating';
import 'react-range-slider-input/dist/style.css';

const Sidebar = () => {

    const [isOpenCategoryFilter,setIsOpenCategoryFilter] = useState(true);
    const [isOpenAvailFilter,setIsOpenAvailFilter] = useState(true);
    const [isOpenSizeFilter,setIsOpenSizeFilter] = useState(true);
  return (
    <aside className="sidebar py-5">
        <div className="box">
            <h3 className="mb-3 text-[16px] font-[600] flex items-center pr-5">
                Shop by Category
                <Button className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#000]" onClick={()=>setIsOpenCategoryFilter(!isOpenCategoryFilter)}>
                    {
                        isOpenCategoryFilter===true ? <FaAngleUp/> : <FaAngleDown/>
                    }
                </Button>
            </h3>
            <Collapse isOpened={isOpenCategoryFilter}>
            <div className="scroll px-4 relative -left-[13px]">
                <FormGroup>
                    <FormControlLabel control={<Checkbox size="small" />} label="Fashion" />
                    <FormControlLabel control={<Checkbox size="small" />} label="Electronic" />
                    <FormControlLabel control={<Checkbox size="small" />} label="Bags" />
                    <FormControlLabel control={<Checkbox size="small" />} label="Footwere" />
                    <FormControlLabel control={<Checkbox size="small" />} label="Grocaries" />
                    <FormControlLabel control={<Checkbox size="small" />} label="Beauty" />
                    <FormControlLabel control={<Checkbox size="small" />} label="Wellness" />
                    <FormControlLabel control={<Checkbox size="small" />} label="Jewellery" />
                    <FormControlLabel control={<Checkbox size="small" />} label="Fashion" />
                    <FormControlLabel control={<Checkbox size="small" />} label="Fashion" />
                    <FormControlLabel control={<Checkbox size="small" />} label="Fashion" />
                </FormGroup>
            </div>
            </Collapse>
        </div>
    
        <div className="box mt-3">
            <h3 className="mb-3 text-[16px] font-[600] flex items-center pr-5">
                Availability
                <Button className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#000]" onClick={()=>setIsOpenAvailFilter(!isOpenAvailFilter)}>
                    {
                        isOpenAvailFilter===true ? <FaAngleUp/> : <FaAngleDown/>
                    }
                </Button>
            </h3>
            <Collapse isOpened={isOpenAvailFilter}>
            <div className="scroll px-4 relative -left-[13px]">
                <FormGroup>
                    <FormControlLabel control={<Checkbox size="small" />} label="Available  (17)" />
                    <FormControlLabel control={<Checkbox size="small" />} label="In stock  (10)" />
                    <FormControlLabel control={<Checkbox size="small" />} label="Not available  (1)" />
                    
                </FormGroup>
            </div>
            </Collapse>
        </div>

        <div className="box mt-3">
            <h3 className="mb-3 text-[16px] font-[600] flex items-center pr-5">
                Size
                <Button className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#000]" onClick={()=>setIsOpenSizeFilter(!isOpenSizeFilter)}>
                    {
                        isOpenSizeFilter===true ? <FaAngleUp/> : <FaAngleDown/>
                    }
                </Button>
            </h3>
            <Collapse isOpened={isOpenSizeFilter}>
            <div className="scroll px-4 relative -left-[13px]">
                <FormGroup>
                    <FormControlLabel control={<Checkbox size="small" />} label="Small  (17)" />
                    <FormControlLabel control={<Checkbox size="small" />} label="Medium (10)" />
                    <FormControlLabel control={<Checkbox size="small" />} label="Large  (10)" />
                    <FormControlLabel control={<Checkbox size="small" />} label="XL  (10)" />
                    <FormControlLabel control={<Checkbox size="small" />} label="XXL  (10)" />
                    
                </FormGroup>
            </div>
            </Collapse>
        </div>

        <div className="box mt-4">
            <h3 className="mb-3 text-[16px] font-[600] flex items-center pr-5">
                Filter By Price
            </h3>

            <RangeSlider/>

            <div className='d-flex pt-4 pb-2 priceRange'>
                <span className='text-[13px]'>
                    From: <strong className='text-dark'>Rs: {100}</strong>
                </span>
                <span className='ml-auto text-[13px]'>
                    From: <strong className='text-dark'>Rs: {5000}</strong>
                </span>
            </div>
        </div>

        <div className="box mt-4">
            <h3 className="mb-3 text-[16px] font-[600] flex items-center pr-5">
                Filter By Rating
            </h3>
            <div className="w-full">
                    <Rating name="size-small" defaultValue={5} size="small" readOnly/>
            </div>
            <div className="w-full">
                    <Rating name="size-small" defaultValue={4} size="small" readOnly/>
            </div>
            <div className="w-full">
                    <Rating name="size-small" defaultValue={3} size="small" readOnly/>
            </div>
            <div className="w-full">
                    <Rating name="size-small" defaultValue={2} size="small" readOnly/>
            </div>
            <div className="w-full">
                    <Rating name="size-small" defaultValue={1} size="small" readOnly/>
            </div>
        </div>
    </aside>
  )
}

export default Sidebar
