import { Link } from "react-router-dom"
import Search from "../Search"
// import { Button } from "@mui/material"
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { IoCart, IoGitCompare, IoHeartOutline } from "react-icons/io5";
import Tooltip from '@mui/material/Tooltip';
import Navigation from "./Navigation";
import { useContext, useState } from "react";
import { MyContext } from "../../App";
import Button from "@mui/material/Button";
import { FaRegUser } from "react-icons/fa";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import { MdOutlineNoteAlt } from "react-icons/md";
import { IoIosHeart } from "react-icons/io";
import { RiLogoutCircleRFill } from "react-icons/ri";




const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
    backgroundColor: '#ff5252'
  },
}));


const Header = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const context = useContext(MyContext)
  return (
    <div>
      <header className="bg-white">
        <div className="top-strip py-2 border-t-[1px] border-gray-300  border-b-[1px]">
            <div className="container">
                <div className="flex items-center justify-between">
                    <div className="coll w-[50%]">
                        <p className="text-[12px] font-[500]">Get upto 50% off new season, limited time only</p>
                    </div>

                    <div className="coll2 flex items-center justify-end">
                      <ul className="flex items-center gap-3">
                        <li className="list-none">
                          <Link to="/helpCenter" className="text-[13px] link font-[500] transition"> HelpCenter </Link>
                        </li>
                        <li className="list-none">
                          <Link to="/orderTracking" className="text-[13px] link font-[500] transition"> OrderTracking </Link>
                        </li>
                      </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className="header py-4  border-gray-300  border-b-[1px]">
          <div className="container flex items-center justify-between">
            <div className="col1 w-[25%]">
                <Link to={"/"}>
                  <img src="/logo.png" className="w-[70px] h-[70px]" />
                </Link>
            </div>
            <div className="col2 w-[40%]">
                <Search/>
            </div>
            <div className="col3 w-[35%] flex items-center pl-7 ">
              <ul className="flex items-center gap-3 justify-end w-full">
                {
                  context.isLogin === false ?
                    <li className="list-none">
                      <Link to="/login" className="link transition text-[15px] font-[500]">
                          Login
                      </Link> | &nbsp;
                      <Link to="/register" className="link transition text-[15px] font-[500]">
                          Register
                      </Link>
                    </li>
                :
                  <>
                    <Button className="!text-[#000] myAccountWrap flex items-center gap-3 cursor-pointer" onClick={handleClick}>
                      <Button className="!w-40px] !h-[40px] !min-w-[40px] !rounded-full !bg-[#f1f1f1]"><FaRegUser className="text-[20px] text-[rgba(0,0,0,0.7)]"/></Button>

                      <div className="info flex flex-col">
                        <h4 className="leading-3 text-[14px] font-[500] capitalize text-left justify-start text-[rgba(0,0,0,0.7)]">Shashi Pratap</h4>
                        <span className="text-[13px] font-[400] text-left justify-start text-[rgba(0,0,0,0.7)]">spsrajjput.gmail.com</span>
                      </div>
                    </Button>   
                     <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                        slotProps={{
                          paper: {
                            elevation: 0,
                            sx: {
                              overflow: 'visible',
                              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                              mt: 1.5,
                              '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                              },
                              '&::before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                              },
                            },
                          },
                        }}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                      >
                        <Link to="/my-account" className="w-full block">
                          <MenuItem onClick={handleClose} className="flex gap-2 !py-2">
                            <FaRegUser className="text-[18px]" /> <span className="text-[14px]">My Account</span>
                          </MenuItem>
                        </Link>
                        <Link to="/my-orders" className="w-full block">
                          <MenuItem onClick={handleClose} className="flex gap-2 !py-2">
                            <MdOutlineNoteAlt className="text-[18px]" /> <span className="text-[14px]">Order</span>
                          </MenuItem>
                        </Link>
                        <Link to="/my-list" className="w-full block">
                          <MenuItem onClick={handleClose} className="flex gap-2 !py-2">
                            <IoIosHeart className="text-[18px]" /> <span className="text-[14px]">My List</span>
                          </MenuItem>
                        </Link>
                        <Divider />
                          <MenuItem onClick={handleClose} className="flex gap-2 !py-2">
                            <RiLogoutCircleRFill className="text-[18px]" /> <span className="text-[14px]">Logout</span>
                          </MenuItem>
                      </Menu>
                  </>        
                }
                
                <li>
                <Tooltip title="Compare" >
                <IconButton aria-label="compare">
                  <StyledBadge badgeContent={4} color="secondary">
                      <IoGitCompare/>
                  </StyledBadge>
                </IconButton>
                </Tooltip>
                </li>
                <li>
                <Tooltip title="Wishlist" >
                <IconButton aria-label="heart">
                  <StyledBadge badgeContent={4} color="secondary">
                      <IoHeartOutline/> 
                  </StyledBadge>
                </IconButton>
                </Tooltip>
                </li>
                <li>
                <Tooltip title="Cart" >
                <IconButton aria-label="cart" onClick={()=> context.setOpenCartPanel(true) }>
                  <StyledBadge badgeContent={4} color="secondary">
                      <IoCart />
                  </StyledBadge>
                </IconButton>
                </Tooltip>
                </li>
              </ul>
            </div>
          </div>
        </div>

          <Navigation/>

      </header>
    </div>
  )
}

export default Header
