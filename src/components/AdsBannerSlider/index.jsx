// import React from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import required modules
import {Navigation } from 'swiper/modules';
import BannerBox from '../BannerBox';

const AdsBannerSlider = (props) => {
  return (
    <div className='py-5 w-full'>
        <Swiper
            slidesPerView={props.items}
            navigation={true}
            spaceBetween={10}
            pagination={{
            clickable: true,
            }}
            modules={[Navigation]}
            className="smlBtn"
        >
            <SwiperSlide>
                <BannerBox img={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1741612209_HPMC-1.jpg?im=Resize=(768,448)"} link={"/"}/>
            </SwiperSlide>

            <SwiperSlide>
                <BannerBox img={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1741612341_HPMC-10.jpg?im=Resize=(768,448)"} link={"/"}/>
            </SwiperSlide>

            <SwiperSlide>
                <BannerBox img={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1741685062_HPMC-4.jpg?im=Resize=(768,448)"} link={"/"}/>
            </SwiperSlide>

            <SwiperSlide>
                <BannerBox img={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1741613385_HPMC-17.jpg?im=Resize=(768,448)"} link={"/"}/>
            </SwiperSlide>

            <SwiperSlide>
                <BannerBox img={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1741613561_HPMC-12.jpg?im=Resize=(768,448)"} link={"/"}/>
            </SwiperSlide>

            <SwiperSlide>
                <BannerBox img={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1741613880_14.jpg?im=Resize=(768,448)"} link={"/"}/>
            </SwiperSlide>
        </Swiper>
    </div>
  );
}
AdsBannerSlider.propTypes = {
    items: PropTypes.number.isRequired, // Ensure `items` is a required number
  };

export default AdsBannerSlider;
