import PropTypes from 'prop-types';
// import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import required modules
import {Navigation } from 'swiper/modules';
import ProductItem from '../Productitem';

const ProductsSlider = (props) => {
  return (
    <div className="productsSlider py-3">
       <Swiper
        slidesPerView={props.items}
        navigation={true}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {Array.from({ length: 12}).map((_, i) => (
             <SwiperSlide key={i}>
                <ProductItem />
         </SwiperSlide>
        ))}
       
    </Swiper>
    </div>
  );
}
ProductsSlider.propTypes = {
    items: PropTypes.number.isRequired,  // Validate `img` as a required number
  };
export default ProductsSlider;
