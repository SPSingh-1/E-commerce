import React from 'react'
import { FaShippingFast } from "react-icons/fa";

import HomeCatSlider from "../../components/HomeCatSlider"
import HomeSlider from "../../components/HomeSlider"
import AdsBannerSlider from "../../components/AdsBannerSlider";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ProductsSlider from '../../components/ProductsSlider';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import required modules
import {Navigation } from 'swiper/modules';
import BlogItem from '../../components/BlogItem';
import HomeBannerV2 from '../../components/HomeSliderV2';
import BannerBoxV2 from '../../components/BannerBoxV2';
import AdsBannerSliderV2 from '../../components/AdsBannerSliderV2';

const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <HomeSlider/>
      <section className='mt-10'>
        <div className='container flex gap-5'>
          <div className='part1 w-[65%]'>
            
            <HomeBannerV2/>
          </div>

          <div className='part2 w-[25%] flex items-center justify-between flex-col gap-5'>
            <BannerBoxV2 info="left" image={"https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg"}/>
            <BannerBoxV2 info="right" image={"https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-2.jpg"}/>
          </div>
        </div>
      </section>
      <HomeCatSlider/>



      <section className="bg-white py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="leftSec">
              <h2 className="text-[20px] font-[600]">Popular Products</h2>
              <p className="text-[14px] font-[400]">Do not miss the current offers until the end of March.</p>
            </div>

            <div className="rightSec w-[60%]">
            <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper' }}>
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="Smart Tablet" />
                <Tab label="Boy T-shirt" />
                <Tab label="Watcht" />
                <Tab label="Bengles" />
                <Tab label="Wooden Chair" />
                <Tab label="Shoes" />
                <Tab label="Lady Purse" />
                <Tab label="VideoGame Remote" />
                <Tab label="Painting" />
                <Tab label="Boys Weare" />
                <Tab label="Boys party wear" />
                <Tab label="Boys Formal" />
              </Tabs>
            </Box>
            </div>
          </div>


        <ProductsSlider items={6}/>

        </div>
      </section>
      <section className="py-5 bg-white">
        <div className="container">
          <div className="freeShipping w-[80%] m-auto p-3 pt-2 border-2 border-[#ff5252] flex items-center justify-between rounded-md mb-7">
            <div className="col1 flex items-center gap-4">
              <FaShippingFast className="text-[50px]"/>
              <span className="text-[20px] font-600 uppercase">Free Shipping</span>
            </div>
            <div className="col2">
              <p className="mb-0 font-[500]">
                Free Delivery Now On Your First Order and over $200
              </p>
            </div>
            <p className="font-bold text-[30px]">-ONLY $200</p>
          </div>

          <AdsBannerSliderV2 items={4}/>
        </div>
      </section>


      <section className='py-5 pt-0 bg-white'>
        <div className='container'>
          <h2 className='text-[20px] font-[600]'>Latest Products</h2>
        <ProductsSlider items={6}/>

        <AdsBannerSlider items={3}/>
        </div>
      </section>

      <section className='py-5 pt-0 bg-white'>
        <div className='container'>
          <h2 className='text-[20px] font-[600]'>Featured Products</h2>
        <ProductsSlider items={6}/>

        <AdsBannerSlider items={3}/>
        </div>
      </section>
      

      <section className='py-5 pb-8 pt-0 bg-white blogSection'>
        <div className='container'>
        <h2 className='text-[20px] font-[600] mb-4'>From The Blog</h2>
          <Swiper
            slidesPerView={4}
            navigation={true}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation]}
            className="nlogSlider"
          >
            <SwiperSlide> 
              <BlogItem/>
          </SwiperSlide>
          <SwiperSlide> 
              <BlogItem/>
          </SwiperSlide>
          <SwiperSlide> 
              <BlogItem/>
          </SwiperSlide>
          <SwiperSlide> 
              <BlogItem/>
          </SwiperSlide>
          <SwiperSlide> 
              <BlogItem/>
          </SwiperSlide>
          <SwiperSlide> 
              <BlogItem/>
          </SwiperSlide>
          <SwiperSlide> 
              <BlogItem/>
          </SwiperSlide>
          </Swiper>
        </div>
      </section>


    </div>
  )
}

export default Home
