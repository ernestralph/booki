import React, { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { SEND_OTP_URL, SENDCHAMP_API_KEY, VERIFY_OTP_URL } from "../../server";
import { toast } from "react-toastify";

const OTPLayout = () => {
  const [otp, setOtp] = useState(null);
  const [userData, setUserData] = useState({});
  const [otpData, setOTPData] = useState({});

  // ...getting registration data
  const location = useLocation();
  const data = location?.state?.userData;

  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      setUserData(data.user);
    }

    if (otp !== null && otp.length === 4) {
      verifyOTP(otp);
    }
  }, [data, otp]);

  const sendOTPBySMS = async () => {
    // options
    const sendOptions = {
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization: `Bearer ${SENDCHAMP_API_KEY}`,
      },
    };

    const sendBody = {meta_data: {first_name: 'ayodele'},
      channel: "sms",
      sender: "+234810000000",
      token_type: "numeric",
      token_length: 4,
      expiration_time: 3,
      customer_mobile_number: `${userData.phone}`,
    };

    //send otp to user mobile number using sms gateway.
    await axios
      .post(`${SEND_OTP_URL}`, sendBody, sendOptions)
      .then((data) => {
        setOTPData(data.data);
        toast.success(`${data.message}`)
      })
      .catch((error) => {
        toast.success(`${error}`);
        
      });
  };

  const verifyOTP = async () => {
    
    // options
    const verifyOptions = {
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization: `Bearer ${SENDCHAMP_API_KEY}`,
      },
    };

    const verifyBody = {
      verification_reference: `${otpData.verification_reference}`,
      verification_code: `${otp}`,
    };

    //veify otp .
    await axios
      .post(`${VERIFY_OTP_URL}`, verifyBody, verifyOptions)
      .then((data) => {
        toast.success(`${data.message}`);
        setOtp(null)
        navigate('/');
      })
      .catch((error) => {
         toast.error(`${error.response?.data?.message}`);
      });
  };

  return (
    <div className="flex h-[300px] w-full justify-center flex-col items-center">
      <h2 className="sm:text-[50px] font-[700] text-gray-500">Enter OTP</h2>
      <OtpInput
        inputStyle={{ height: "5em", width: "4em", fontSize: "2em" }}
        value={otp}
        onChange={setOtp}
        numInputs={4}
        shouldAutoFocus={true}
        renderSeparator={<span>-</span>}
        renderInput={(props) => <input {...props} />}
      />
      <div className="text-center mt-2">
        To verify your number
        <span>
          <button onClick={sendOTPBySMS} className="text-blue-600 ml-1">
            Send OTP
          </button>
        </span>
      </div>
    </div>
  );
};

export default OTPLayout;
