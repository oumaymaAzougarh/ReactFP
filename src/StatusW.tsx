function StatusW() {
    return (
      <div className="border-gray-300 fixed top-16 left-[400px] p-3 flex flex-col justify-between">
        {/* Title */}
        <h1 className="text-lg font-bold text-[#000000]">Status</h1>
  
        {/* Status Layout */}
        <div className="w-full h-[37px] flex justify-between gap-x-4 items-center">
          {/* Status 1 */}
          <div className="w-[150px] h-[35px] bg-[#FFFFFF] relative flex flex-col items-center justify-center shadow-[0px_1px_1px_0px_#34343433]">
            <div className="w-[150px] h-[3px] bg-[#37C634]"></div>
            <span className="text-[#B2B2B2] text-[16px] font-semibold">Connect</span>
            {/* Text on Background */}
            <div className="absolute w-[136px] h-[27px] top-[6px] left-[7px] opacity-0 text-[#B2B2B2] text-[16px] font-semibold leading-[21.82px] text-left underline">
              Connect
            </div>
            {/* Left Text */}
            <div className="absolute w-[25px] h-[27px] left-[120px] top-2 text-[#B2B2B2] text-[20px] font-semibold leading-[21.82px] text-left">
              <span>20</span>
            </div>
          </div>
  
          {/* Status 2 */}
          <div className="w-[150px] h-[35px] bg-[#FFFFFF] relative flex flex-col items-center justify-center shadow-[0px_1px_1px_0px_#34343433]">
            <div className="w-[150px] h-[3px] bg-[#A0A0A0]"></div>
            <span className="text-[#B2B2B2] text-[16px] font-semibold">Disconnected</span>
            {/* Text on Background */}
            <div className="absolute w-[136px] h-[27px] top-[6px] left-[7px] opacity-0 text-[#B2B2B2] text-[16px] font-semibold leading-[21.82px] text-left underline">
              Disconnected
            </div>
            {/* Left Text */}
            <div className="absolute w-[25px] h-[27px] left-[127px] top-2  text-[#B2B2B2] text-[20px] font-semibold leading-[21.82px] text-left">
              <span>11</span>
            </div>
          </div>
  
          {/* Status 3 */}
          <div className="w-[150px] h-[35px] bg-[#FFFFFF] relative flex flex-col items-center justify-center shadow-[0px_1px_1px_0px_#34343433]">
            <div className="w-[150px] h-[3px] bg-[#FFBE15]"></div>
            <span className="text-[#B2B2B2] text-[16px] font-semibold">Suspicious!</span>
            {/* Text on Background */}
            <div className="absolute w-[136px] h-[27px] top-[6px] left-[7px] opacity-0 text-[#B2B2B2] text-[20px] font-semibold leading-[21.82px] text-left underline">
              Suspicious!
            </div>
            {/* Left Text */}
            <div className="absolute w-[25px] h-[27px] left-[123px] top-2  text-[#B2B2B2] text-[20px] font-semibold leading-[21.82px] text-left">
              <span>12</span>
            </div>
          </div>
  
          {/* Status 4 */}
          <div className="w-[150px] h-[35px] bg-[#FFFFFF] relative flex flex-col items-center justify-center shadow-[0px_1px_1px_0px_#34343433]">
            <div className="w-[150px] h-[3px] bg-[#FC1C37]"></div>
            <span className="text-[#B2B2B2] text-[16px] font-semibold">In Danger! </span>
            {/* Text on Background */}
            <div className="absolute w-[136px] h-[27px] top-[6px]  left-[7px] opacity-0 text-[#B2B2B2] text-[16px] font-semibold leading-[21.82px] text-left underline">
              In Danger! 
            </div>
            {/* Left Text */}
            <div className="absolute w-[25px] h-[27px] left-[126px] top-2 text-[#B2B2B2] text-[20px] font-semibold leading-[21.82px] text-left">
              <span>16</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default StatusW;
  