import { IoNotifications } from "react-icons/io5";
import { FiMoon } from "react-icons/fi";

function Header() {
  return (
    <header className="w-full h-[54px] px-[21px] py-[13px] bg-white fixed left-[60px] flex items-center justify-between shadow-md">
      <h1 className="text-black text-lg">Dashboard</h1>

      <div className="flex w-[480px] items-center gap-3">
        <select className="border w-[155px] h-[27px] px-3 py-0  text-sm bg-[#F3F3F3] text-[#747474]"  name="select_sites" id="select_sites" >
          <option value="site1">Site 001</option>
          <option value="site2">Site 002</option>
        </select>

        <select className="border w-[155px] h-[27px] px-3 py-0  text-sm bg-[#F3F3F3] text-[#747474]"  name="select_zone" id="select_zone" >
          <option value="zone1">All zones</option>
          <option value="zone2">Zone 2</option>
        </select>

        <button className=" p-2 rounded-full flex items-center justify-center">
          <FiMoon size={24} color="D8D8D8" />
        </button>

        <button className=" p-2 rounded-full flex items-center justify-center">
          <IoNotifications size={24} color="D8D8D8" />
        </button>
      </div>
    </header>
  );
}

export default Header;
