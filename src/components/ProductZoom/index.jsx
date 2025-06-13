// import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import InnerImageZoom from 'react-inner-image-zoom'
import 'react-inner-image-zoom/lib/styles.min.css'
import {Navigation } from 'swiper/modules';
import { useRef, useState } from 'react';


const ProductZoom = () => {

  const [slideIndex, setSlideIndex] = useState(0);
  const zoomSliderBig = useRef();
  const zoomSliderSml = useRef();

  const goto = (index) => {
    setSlideIndex(index);
    zoomSliderSml.current.swiper.slideTo(index);
    zoomSliderBig.current.swiper.slideTo(index);
  }

  return (
    <>
      <div className='flex gap-3'>

        <div className='slider w-[10%]'>
          <Swiper
            ref={zoomSliderSml}
            slidesPerView={4}
            navigation={true}
            spaceBetween={0}
            direction={'vertical'}
            modules={[Navigation]}
            className="zoomProductSliderThumbs h-[500px] overflow-hidden"
          >
            <SwiperSlide> 
              <div className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex===0 ? 'opacity-100' : 'opacity-30'}`} onClick={() => goto(0)}>
                <img 
                src="https://api.spicezgold.com/download/file_1734528821890_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-0-202308161431.webp" 
                className="w-full h-[80px] transition-all group-hover:scale-105" 
                alt="kurti Image"/>
              </div>
            </SwiperSlide>
            <SwiperSlide> 
              <div className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex===1 ? 'opacity-100' : 'opacity-30'}`} onClick={() => goto(1)}>
                <img 
                src="https://api.spicezgold.com/download/file_1734528821892_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-1-202308161431.jpg" 
                className="w-full h-[80px] transition-all group-hover:scale-105" 
                alt="kurti Image"/>
              </div>
            </SwiperSlide>
            <SwiperSlide> 
              <div className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex===2 ? 'opacity-100' : 'opacity-30'}`} onClick={() => goto(2)}>
                <img 
                src="https://api.spicezgold.com/download/file_1734528821894_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-2-202308161432.webp" 
                className=" w-full h-[80px] transition-all group-hover:scale-105" 
                alt="kurti Image"/>
              </div>
            </SwiperSlide>
            <SwiperSlide> 
              <div className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex===3 ? 'opacity-100' : 'opacity-30'}`} onClick={() => goto(3)}>
                <img 
                src="https://api.spicezgold.com/download/file_1734528821896_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-3-202308161432.webp" 
                className="w-full h-[80px] transition-all group-hover:scale-105" 
                alt="kurti Image"/>
              </div>
            </SwiperSlide>
            <SwiperSlide> 
              <div className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex===4 ? 'opacity-100' : 'opacity-30'}`} onClick={() => goto(4)}>
                <img 
                src="https://api.spicezgold.com/download/file_1734526809409_need-printed-cotton-straight-kurtis-for-women-fancy-kurti-for-girls-regular-office-college-wear-kurta-for-ladies-kurti-pant-set-of-1-size-l-product-images-rvyi2nw7q6-0-202408011909.jpg" 
                className="h-[80px] w-full transition-all group-hover:scale-105" 
                alt="kurti Image"/>
              </div>
            </SwiperSlide>
            <SwiperSlide></SwiperSlide>
          </Swiper>
        </div>
        <div className='zoomContainer w-[88%] h-[500px] overflow-hidden rounded-md'>
           <Swiper
            ref={zoomSliderBig}
            slidesPerView={1}
            navigation={false}
            spaceBetween={0}
          >
            <SwiperSlide>
              <InnerImageZoom 
                zoomType="hover"
                zoomScale={1}
                className='w-[400px]'
                src={"https://api.spicezgold.com/download/file_1734528821890_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-0-202308161431.webp"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom 
                zoomType="hover"
                zoomScale={1}
                className='w-[400px]'
                src={"https://api.spicezgold.com/download/file_1734528821892_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-1-202308161431.jpg"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom 
                zoomType="hover"
                zoomScale={1}
                className='w-[400px]'
                src={"https://api.spicezgold.com/download/file_1734528821894_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-2-202308161432.webp"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom 
                zoomType="hover"
                zoomScale={1}
                className='w-[400px]'
                src={"https://api.spicezgold.com/download/file_1734528821896_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-3-202308161432.webp"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom 
                zoomType="hover"
                zoomScale={1}
                className='w-[400px]'
                src={"https://api.spicezgold.com/download/file_1734526809409_need-printed-cotton-straight-kurtis-for-women-fancy-kurti-for-girls-regular-office-college-wear-kurta-for-ladies-kurti-pant-set-of-1-size-l-product-images-rvyi2nw7q6-0-202408011909.jpg"}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default ProductZoom;
