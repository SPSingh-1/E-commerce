// import React from 'react'

import { useState } from "react";
import PropTypes from 'prop-types';


const OtpBox = ({length, onChange}) => {
    const [otp, setOtp] = useState(new Array(length).fill(""));

    const handleChange = (element,index) => {
        const value = element.value;
        if(isNaN(value)) return; //only numbers allowed

        //Update OTP value
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
        onChange(newOtp.join(""));

        //Focus on next input
        if(value && index < length -1) {
            document.getElementById(`otp-input-${index + 1}`).focus();
        }
    };
    const handleKeyDown = (event, index) => {
        if(event.key === "Backspace" && !otp[index] && index > 0) {
            document.getElementById(`otp-input-${index - 1}`).focus();
        }
    }
  return (
    <div className="flex gap-1 justify-center otpBox">
        {otp.map((data, index) => (
            <input 
            key={index}
            id={`otp-input-${index}`}
            type="text"
            maxLength="1"
            value={otp[index]}
            onChange={(e) => handleChange(e.target, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className="w-[45px] h-[45px] text-center text-[17px] font-[600]"
            />
        ))}
      
    </div>
  );
};


OtpBox.propTypes = {
    length: PropTypes.number.isRequired,
    onChange:  PropTypes.number.isRequired
}

export default OtpBox;
