import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import Home from './Pages/Home';
import Footer from './components/Footer';
import ProductListing from './Pages/ProductListing';
import ProductDetails from './Pages/ProductDetails';
import { createContext, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
import ProductZoom from './components/ProductZoom';
import { IoMdClose } from "react-icons/io";
import ProductDetailsComponent from './components/ProductDetailsComponent';
import Login from './Pages/Login';
import Register from './Pages/Register';
import CartPage from './Pages/Cart';
import Verify from './Pages/Verify';
import ForgotPassword from './Pages/ForgotPassword';
import Checkout from './Pages/Checkout';
import MyAccount from './Pages/MyAccount';
import MyList from './Pages/MyList';
import Orders from './Pages/Orders';




const MyContext = createContext();

function App() {

  const [openProductDetailsModal, setOpenProductDetailsModal] = useState(false);
  const [fullWidth ] = useState(true);
  const [maxWidth ] = useState('lg');
  const [openCartPanel, setOpenCartPanel] = useState(false)
  const [isLogin, setIsLogin] = useState(true)

  const handleCloseProductDetailsModal = () => {
    setOpenProductDetailsModal(false);
  };

  const toggleCartPanel = (newOpen) => () => {
    setOpenCartPanel(newOpen);
  };
  const openAlertBox=(status, msg)=>{
    if(status==="success"){
      toast.success(msg);
    }
    if(status==="error"){
      toast.error(msg);
    }
  }

  const values = {
    setOpenProductDetailsModal,
    setOpenCartPanel,
    toggleCartPanel,
    openCartPanel,
    openAlertBox,
    isLogin,
    setIsLogin
  };

   
  return (
    <>
      <BrowserRouter>
      <MyContext.Provider value={values}>
        <Header/>
        <Routes>
          <Route path={"/"} exact={true} element={<Home/>}/>
          <Route path={"/productListing"} exact={true} element={<ProductListing/>}/>
          <Route path={"/productDetails/:id"} exact={true} element={<ProductDetails/>}/>
          <Route path={"/login"} exact={true} element={<Login/>}/>
          <Route path={"/register"} exact={true} element={<Register/>}/>
          <Route path={"/cart"} exact={true} element={<CartPage/>}/>
          <Route path={"/verify"} exact={true} element={<Verify/>}/>
          <Route path={"/forgot-password"} exact={true} element={<ForgotPassword/>}/>
          <Route path={"/checkout"} exact={true} element={<Checkout/>}/>
          <Route path={"/my-account"} exact={true} element={<MyAccount/>}/>
          <Route path={"/my-list"} exact={true} element={<MyList/>}/>
          <Route path={"/my-orders"} exact={true} element={<Orders/>}/>
        </Routes>
         <Footer/>
        </MyContext.Provider>
      </BrowserRouter>
      <Toaster/>

      <Dialog
        open={openProductDetailsModal}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        onClose={handleCloseProductDetailsModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className='productDetailsModal'
      >
        <DialogContent>
            <div className='flex items-center w-full productDetailsModalContainer relative'>
              <Button className='!w-[40px] !h-[40px] !min-w-[40px] !rounded-full text-[#000] !absolute top-[15px] right-[15px] !bg-[#f1f1f1]' onClick={handleCloseProductDetailsModal}><IoMdClose className='text-[20px] '/></Button>
              <div className='col1 w-[40%] px-3'>
                <ProductZoom/>
              </div>

              <div className='col2 w-[60%] py-8 px-8 pr-16 productContent'>
                <ProductDetailsComponent/>
              </div>
            </div>
        </DialogContent>
      </Dialog>

    </>
  )
}

export default App

export {MyContext}
