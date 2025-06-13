import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import Home from './Pages/Home';
import Footer from './components/Footer';
import ProductListing from './Pages/ProductListing';
import ProductDetails from './Pages/ProductDetails';
import { createContext, useState } from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
import ProductZoom from './components/ProductZoom';
import { IoMdClose } from "react-icons/io";
import ProductDetailsComponent from './components/ProductDetailsComponent';



const MyContext = createContext();

function App() {

  const [openProductDetailsModal, setOpenProductDetailsModal] = useState(false);
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState('lg');

  const handleCloseProductDetailsModal = () => {
    setOpenProductDetailsModal(false);
  };

  const values = {
    setOpenProductDetailsModal
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
        </Routes>
         <Footer/>
        </MyContext.Provider>
      </BrowserRouter>


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
