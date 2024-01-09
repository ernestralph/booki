import React, { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { SEND_OTP_URL, SENDCHAMP_API_KEY } from "../../server";

const OTPLayout = () => {
  const [otp, setOtp] = useState("");
  const [userData, setUserData] = useState({});

  // ...getting registration data
  const location = useLocation();
  const data = location?.state?.userData;

  useEffect(() => {
    if (data) {
      setUserData(data.user);
    }
  }, [data]);

  const sendOTPBySMS = async () => {
    
    // options
    const options = {
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization: `Bearer ${SENDCHAMP_API_KEY}`,
      },
    };

    const body = {meta_data: {first_name: 'ayodele'},
      channel: "sms",
      sender: "+234810000000",
      token_type: "numeric",
      token_length: 4,
      expiration_time: 3,
      customer_mobile_number: `${userData.phone}`,
    };

    //send otp to user mobile number using sms gateway.
    await axios
      .post(`${SEND_OTP_URL}`,body, options)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
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
