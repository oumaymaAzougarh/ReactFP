function Status() {
    return (
      <div className="w-[636px] h-[62px] bg-gray-100 border-gray-300 fixed top-16 left-[70px] rounded-lg shadow-md p-3 flex flex-col justify-between">
        {/* Title */}
        <h1 className="text-lg font-bold text-gray-700">Status</h1>
  
        {/* Status Layout */}
        <div className="w-full h-[37px] flex justify-between items-center">
          {/* Status 1 */}
          <div className="w-[150px] h-[35px] bg-green-500 rounded-md flex flex-col items-center justify-between">
            <span className="text-white text-sm font-semibold">Connect</span>
            <div className="w-[150px] h-[3px] bg-green-700"></div>
          </div>
    
          {/* Status 2 */}
          <div className="w-[150px] h-[35px] bg-gray-400 rounded-md flex flex-col items-center justify-between">
            <span className="text-white text-sm font-semibold">Disconnected</span>
            <div className="w-[150px] h-[3px] bg-gray-600"></div>
          </div>
  
          {/* Status 3 */}
          <div className="w-[150px] h-[35px] bg-yellow-500 rounded-md flex flex-col items-center justify-between">
            <span className="text-white text-sm font-semibold">Suspicious!</span>
            <div className="w-[150px] h-[3px] bg-yellow-700"></div>
          </div>
  
          {/* Status 4 */}
          <div className="w-[150px] h-[35px] bg-red-500 rounded-md flex flex-col items-center justify-between">
            <span className="text-white text-sm font-semibold">In Danger!</span>
            <div className="w-[150px] h-[3px] bg-red-700"></div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Status;
  