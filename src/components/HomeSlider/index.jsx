// import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const HomeSlider = () => {
  return (
    <>
     <div className='homeSlider py-4'>
      <div className='container'>
        <Swiper navigation={true} 
            autoplay={{
              delay:2500,
              disableOnInteraction:false,
            }}
            spaceBetween={10}
            loop={true}
            pagination={{
            dynamicBullets: true,
          }} modules={[Navigation, Pagination, Autoplay]} className="sliderHome">
          <SwiperSlide>
            <div className='item rounded-[20px] overflow-hidden'>
            <img alt="image" className="w-full img1" src="https://api.spicezgold.com/download/file_1734524878924_1721277298204_banner.jpg"/>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='item rounded-[20px] overflow-hidden'>
              {/* <img alt="image" className="w-full img1" src="https://api.spicezgold.com/download/file_1734524893797_NewProject(13).jpg"/> */}
            <img alt="image" className="w-full img1" src="https://api.spicezgold.com/download/file_1734524878924_1721277298204_banner.jpg"/>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='item rounded-[20px] overflow-hidden'>
              <img alt="image" className="w-full img1" src="https://api.spicezgold.com/download/file_1734524930884_NewProject(6).jpg"/>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='item rounded-[20px] overflow-hidden'>
              <img alt="image" className="w-full img1" src="https://api.spicezgold.com/download/file_1734524930884_NewProject(6).jpg"/>
              {/* <img alt="image" className="w-full img1" src="https://api.spicezgold.com/download/file_1734524958576_NewProject(10).jpg"/> */}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='item rounded-[20px] overflow-hidden'>
              <img alt="image" className="w-full img1"  src="https://api.spicezgold.com/download/file_1734524971122_NewProject(8).jpg"/>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='item rounded-[20px] overflow-hidden'>
              <img alt="image" className="w-full img1" src="https://api.spicezgold.com/download/file_1734524985581_NewProject(11).jpg"/>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='item rounded-[20px] overflow-hidden'>
              <img alt="image" className="w-full img1" src="https://api.spicezgold.com/download/file_1734525002307_1723967638078_slideBanner1.6bbeed1a0c8ffb494f7c.jpg"/>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='item rounded-[20px] overflow-hidden'>
              <img alt="image" className="w-full img1" src="https://api.spicezgold.com/download/file_1734525014348_NewProject(7).jpg"/>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='item rounded-[20px] overflow-hidden'>
              <img alt="image" className="w-full img1" src="https://api.spicezgold.com/download/file_1734524930884_NewProject(6).jpg"/>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
     </div>
    </>
  )
}

export default HomeSlider
