import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate 


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add logic to handle the email submission for password reset (if needed)
    console.log("Email submitted:", email);
    
    // Navigate to the dashboard
    navigate("/dashboard"); // Redirect to the dashboard page
  };  



  return (
    <div
      className="w-full h-screen bg-center flex justify-center items-center"
      style={{
        backgroundImage: "url(/background.jpg)",
        backgroundSize: "100%", // Dezoom effect (scale down)
      }}
    >
      {/* Forgot Password Box */}
      <div className="w-[438px] h-[359px] border border-[#E3E3E3] bg-white shadow-lg flex flex-col justify-between">
        {/* Title with Line */}
        <div className="relative flex items-center justify-center my-[15.5px]">
          <div className="absolute w-[161.03px] h-0 border-b border-gray-300 left-0" />
          <h1 className="relative z-10 text-[20px] text-sm font-semibold font-nunito text-gray-700">
            Forgot Password
          </h1>
          <div className="absolute w-[161.03px] h-0 border-b border-gray-300 right-0" />
        </div>

        {/* Instruction Text */}
        <div className="px-[26px] mt-[16px]">
          <p className="text-[15px] font-semibold text-gray-600 text-center">
            Enter your email and we will email instructions on how to reset your password.
          </p>
        </div>

        {/* Email Input */}
        <div className="px-[26px] mt-[16px]">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="block w-full h-[42px] mb-[10px] p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Submit Button */}
        <div className="px-[26px] mb-[16px]">
          <button
            onClick={handleSubmit}
            className="w-full h-[55px] bg-green-500 text-white font-semibold rounded-md"
          >
            Submit
          </button>
        </div>

        {/* Footer */}
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

export default ForgotPassword;
