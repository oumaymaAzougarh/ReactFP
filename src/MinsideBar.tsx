import { useState } from "react";
import { FaHouse } from "react-icons/fa6"; // FaHouse for home icon
import { IoNotificationsCircle } from "react-icons/io5"; // IoNotificationsCircle for notifications
import { FaUsers } from "react-icons/fa"; // FaUsers for users group icon
import { IoMdHelpCircle } from "react-icons/io"; // IoMdHelpCircle for help icon
import { TfiAlignLeft } from "react-icons/tfi"; // Toggle icon

function MinsideBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to toggle sidebar visibility
  const [activeIcon] = useState(null); // Track the active icon

  // Function to handle sidebar toggle
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

 

  return (
    <div className="flex">
      {/* Wrapper for Sidebar and Content */}
      <div className="flex w-full">
        {/* Sidebar */}
        <aside
          className={`h-screen bg-[#343434] flex flex-col items-start relative transition-all duration-300 ease-in-out ${
            isSidebarOpen ? "w-[200px]" : "w-[60px]"
          }`}
          style={{
            position: "fixed", // Make sidebar fixed to the screen
            top: "0", // Keep it at the top of the page
            left: "0", // Keep it on the left of the page
          }}
        >
          {/* Fixed Toggle Button */}
          <div className="absolute z-10 top-1 left-3 w-[30px] h-[30px] flex items-center justify-center">
            <button
              className="w-[30px] h-[30px] flex items-center justify-center"
              aria-label="Toggle Sidebar"
              onClick={toggleSidebar}
            >
              <TfiAlignLeft className="text-white text-lg" />
            </button>
          </div>

          {/* Sidebar Menu */}
          <nav className="flex flex-col items-start w-full mt-16">
            <ul className="flex flex-col items-start space-y-7">
              {/* Dashboard Icon and Label */}
              <li
                
                className={`text-white text-sm w-full flex items-center cursor-pointer transition-all duration-300 ease-in-out ${
                  activeIcon === 1
                    ? "border-l-4 border-white-500 pl-2"
                    : "hover:border-l-4 hover:border-white-500 pl-2"
                }`}
              >
                <div className="flex items-center space-x-5 w-full">
                  <FaHouse
                    className="text-white text-xl mb-1 ml-2"
                    style={{
                      width: "20px",
                      height: "18.88px",
                      opacity: "1",
                    }}
                  />
                  <span
                    className={`text-xm transition-all duration-300 ease-in-out ${
                      isSidebarOpen ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    Dashboard
                  </span>
                </div>
              </li>

              {/* Workers Icon and Label */}
              <li
                
                className={`text-white text-sm w-full flex items-center cursor-pointer transition-all duration-300 ease-in-out ${
                  activeIcon === 2
                    ? "border-l-4 border-white-500 pl-2"
                    : "hover:border-l-4 hover:border-white-500 pl-2"
                }`}
              >
                <div className="flex items-center space-x-4 w-full">
                  <FaUsers
                    className="text-white text-xl mb-1 ml-2"
                    style={{
                      width: "20px",
                      height: "20.02px",
                      opacity: "1",
                    }}
                  />
                  <span
                    className={`text-xm transition-all duration-300 ease-in-out ${
                      isSidebarOpen ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    Workers
                  </span>
                </div>
              </li>

              {/* Notifications Icon and Label */}
              <li
                className={`text-white text-sm w-full flex items-center cursor-pointer transition-all duration-300 ease-in-out ${
                  activeIcon === 3
                    ? "border-l-4 border-white-500 pl-2"
                    : "hover:border-l-4 hover:border-white-500 pl-2"
                }`}
              >
                <div className="flex items-center space-x-4 w-full">
                  <IoNotificationsCircle
                    className="text-white text-xl mb-1 ml-2"
                    style={{
                      width: "22px",
                      height: "21px",
                      opacity: "1",
                    }}
                  />
                  <span
                    className={`text-xm transition-all duration-300 ease-in-out ${
                      isSidebarOpen ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    Notifications
                  </span>
                </div>
              </li>

              {/* Help Icon and Label */}
              <li
                
                className={`text-white text-sm w-full flex items-center cursor-pointer transition-all duration-300 ease-in-out ${
                  activeIcon === 4
                    ? "border-l-4 border-white-500 pl-2"
                    : "hover:border-l-4 hover:border-white-500 pl-2"
                }`}
              >
                <div className="flex items-center space-x-5 w-full">
                  <IoMdHelpCircle
                    className="text-white text-xl mb-1 ml-2"
                    style={{
                      width: "20px",
                      height: "20px",
                      opacity: "1",
                    }}
                  />
                  <span
                    className={`text-xm transition-all duration-300 ease-in-out ${
                      isSidebarOpen ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    Help
                  </span>
                </div>
              </li>
              
            </ul>
          </nav>

          {/* User Icon at Bottom */}
         {/* User Icon at Bottom */}
         <div className="mt-auto flex flex-col items-center  ml-3 mb-0">
            {/* Bottom Circular Image */}
            <div className="w-9 h-9 rounded-full bg-gray-600 overflow-hidden">
              <img
                src="https://via.placeholder.com/150" // Replace with your image URL
                alt="User"
                className="w-full h-full object-cover"
              />
            </div>
            <span
              className={`text-xm transition-all duration-300 ease-in-out ${
                isSidebarOpen ? "opacity-100" : "opacity-0"
              }`}
            >
              User
            </span>
          </div>










        </aside>
      </div>
    </div>
  );
}

export default MinsideBar;
