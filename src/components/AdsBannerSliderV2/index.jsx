// import React from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import required modules
import {Navigation } from 'swiper/modules';
import BannerBoxV2 from '../BannerBoxV2';

const AdsBannerSliderV2 = (props) => {
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
                <BannerBoxV2 info="left" image={"https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg"} link={"/"}/>
            </SwiperSlide>

            <SwiperSlide>
                <BannerBoxV2 info="right" image={"https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/cms-banner-1.jpg"} link={"/"}/>
            </SwiperSlide>

            <SwiperSlide>
                <BannerBoxV2 info="right" image={"https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/cms-banner-2.jpg"} link={"/"}/>
            </SwiperSlide>

            <SwiperSlide>
                <BannerBoxV2 info="right" image={"https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/cms-banner-3.jpg"} link={"/"}/>
            </SwiperSlide>

            <SwiperSlide>
                <BannerBoxV2 info="left" image={"https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg"} link={"/"}/>
            </SwiperSlide>

            <SwiperSlide>
                <BannerBoxV2 info="left" image={"https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg"} link={"/"}/>
            </SwiperSlide>
        </Swiper>
    </div>
  );
}
AdsBannerSliderV2.propTypes = {
    items: PropTypes.number.isRequired, // Ensure `items` is a required number
  };

export default AdsBannerSliderV2;
