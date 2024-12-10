import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Login() {
  // State to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };


const navigate = useNavigate(); // Initialize useNavigate

// Redirect to Forgot Password page
const handleForgotPassword = () => {
    navigate("/ForgotPassword"); // Redirect to Forgot Password page
  };



  return (
    <div
      className="w-full h-screen  bg-center  flex justify-center items-center"
      style={{ backgroundImage: "url(/background.jpg)" ,
               backgroundSize: '100%'  // Dezoom effect (scale down)
      }
    }
    >
      {/* Login Box */}
      <div className="w-[438px] h-[391px] border border-[#E3E3E3] bg-white shadow-lg flex flex-col justify-between">
        {/* Title with Line */}
        <div className="relative flex items-center justify-center my-[15.5px]">
          <div className="absolute w-[161.03px] h-0 border-b border-gray-300 left-0" />
          <h1 className="relative z-10 text-[20px] font-semibold font-nunito text-gray-700">
            Login
          </h1>
          <div className="absolute w-[161.03px] h-0 border-b border-gray-300 right-0" />
        </div>

        {/* Inputs and Actions */}
        <div className="px-[26px] mt-[16px]">
          {/* Email Input */}
          <input
            type="email"
            placeholder="Email"
            className="block w-full h-[42px] mb-[10px] p-2 border border-gray-300 rounded-md"
          />
          
          {/* Password Input with toggle eye */}
          <div className="relative mb-[28px]">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="block w-full h-[42px] p-2 border border-gray-300 rounded-md"
            />
            <button
              type="button"
              onClick={togglePassword}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
            >
              {showPassword ? (
                <span role="img" aria-label="hide">
                  👁️
                </span>
              ) : (
                <span role="img" aria-label="show">
                  👁️‍🗨️
                </span>
              )}
            </button>
          </div>

          {/* Checkbox and Links */}
          <div className="flex items-center justify-between mb-[28px]">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="w-[22px] h-[22px] border border-gray-300"
              />
              <span className="ml-2 text-[13px] font-semibold font-nunito text-gray-600">
                Remember me
              </span>
            </div>
            <a
              href="#"
              onClick={handleForgotPassword}
              className="text-[13px] font-semibold font-nunito text-[#FC1C37]"
            >
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button className="w-full h-[55px] bg-green-500 text-white font-semibold rounded-md">
            Login
          </button>
        </div>

        {/* Footer inside Login Box */}
        <div className="mt-4 text-center text-gray-500 text-[13px]">
          <p>@2024 All rights reserved. Service name.</p>
          <p>
            <a href="#" className="text-gray-700 font-bold">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-gray-700 font-bold">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
