import React, { useRef } from 'react';
const OTP = ({ otp, setOtp }) => {
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(value)) {
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value !== '') {
      if (index === 5) {
        inputRefs.current[index].blur();
      } else {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && otp[index] === '') {
      if (index === 0) {
        return;
      }
      inputRefs.current[index - 1].focus();
    }
  };

  
  return (
    <div>
      {otp.map((digit, index) => (
        <input 
          key={index}
          type="text"
          maxLength="1"
          value={digit}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          ref={(ref) => (inputRefs.current[index] = ref)}
          style={{
            width: '40px',
            height: '40px',
            fontSize: '24px',
            textAlign: 'center',
            margin: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            color:"black"
          }}
        />
      ))}
    </div>
  );
};

export default OTP;
