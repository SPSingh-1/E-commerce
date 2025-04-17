// import React from 'react'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom"

const BannerBox = (props) => {
  return (
    <div>
      <div className='box bannerBox overflow-hidden rounded-lg group'>
        <Link>
            <img src={props.img} alt="loding..." className='w-full transition-all group-hover:scale-105 group-hover:rotate-1 '/>
        </Link>
      </div>
    </div>
  )
}
BannerBox.propTypes = {
  img: PropTypes.string.isRequired,  // Validate `img` as a required string
  link: PropTypes.string.isRequired, // Validate `link` as a required string
};
export default BannerBox
