// import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { MdOutlineVisibility } from "react-icons/md";
import { MdOutlineVisibilityOff } from "react-icons/md";
// import { MyContext } from '../../App';

const ForgotPassword = () => {
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isShowPassword1, setIsShowPassword1] = useState(false);


  return (
    <section className="section py-10">
        <div className="container">
            <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10">
                <h3 className="text-center text-[18px] text-black">Forgot Password</h3>

                <form className='w-full mt-5'>
                    <div className='form-group w-full mb-5 relative'>
                        <TextField type= {isShowPassword===false ? "password" : "text"}  id="password" label="New Password" variant="outlined" className='w-full' required name="password"/>
                         <Button className='!absolute top-[7px] right-[10px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black'
                          onClick={()=>setIsShowPassword (!isShowPassword)}>
                            {
                                isShowPassword===true ? <MdOutlineVisibilityOff className='text-[20px] opacity-75'/> : <MdOutlineVisibility className='text-[20px] opacity-75'/> 
                            }
                        </Button>
                    </div>
                    <div className='form-group w-full mb-5 relative'>
                        <TextField type= {isShowPassword1===false ? "password" : "text"} id="confirm_password" label="Confirm Password" variant="outlined" className='w-full' required name="password"/>
                        <Button className='!absolute top-[7px] right-[10px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black'
                          onClick={()=>setIsShowPassword1 (!isShowPassword1)}>
                            {
                                isShowPassword1===true ? <MdOutlineVisibilityOff className='text-[20px] opacity-75'/>: <MdOutlineVisibility className='text-[20px] opacity-75'/> 
                            }
                        </Button>
                    </div>

                    <div className='flex items-center w-full mt-3 mb-3'>
                        <Button className='btn-org btn-lg w-full'>Change Password</Button>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default ForgotPassword
