import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
import PropTypes from "prop-types";
import { IoMdClose } from "react-icons/io";
import CategoryCollapse from '../../CategoryCollapse';

// import { useState } from 'react';

const CategoryPanel = (props) => {
    
   
    const toggleDrawer = (newOpen) => () => {
        props.setIsOpenCatPanel(newOpen)
    };

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" className="categoryPanel" >

            <h3 className='p-3 text-[16px] font-[500] flex items-center justify-between'>
                Shop By Categories
                <IoMdClose onClick={toggleDrawer(false)} className='cursor-pointer text-[20px]'/>
            </h3>

            <CategoryCollapse/>
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
