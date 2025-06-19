// import React from 'react'
import PropTypes from 'prop-types';

const Badge = (props) => {
  return (
    <span className={`flex items-center justify-center py-1 px-1 rounded-full text-[11px] capitalize ${props.status === "pending" && 'bg-[#ff5252] text-white'}  ${props.status === "confirm" && 'bg-[#0be59c] text-white'}  ${props.status === "delivered" && 'bg-green-700 text-white'}`} >{props.status} </span>
  )
}

Badge.propTypes = {
    status: PropTypes.number.isRequired,
}

export default Badge;
