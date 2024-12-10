import { useState } from 'react';
import { FaSearch, FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Importing search icon and toggle icon

function ListWorker() {
  // State to hold search input, filtered workers, and list visibility
  const [searchQuery, setSearchQuery] = useState('');
  const [isListVisible, setIsListVisible] = useState(false);

  // Dummy data for workers
  const workers = [
    { name: 'John Doe', phone: '+1234567890', status: 'connected' },
    { name: 'Jane Smith', phone: '+0987654321', status: 'disconnected' },
    { name: 'Alex Johnson', phone: '+1122334455', status: 'connected' },
    { name: 'Emily White', phone: '+2233445566', status: 'disconnected' },
    { name: 'James Black', phone: '+3344556677', status: 'connected' },
  ];

  // Filter workers based on search query
  const filteredWorkers = workers.filter(worker =>
    worker.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Adjust height based on the visibility of the list
  const containerHeight = isListVisible ? 'h-[420px]' : 'h-[120px]'; // Further reduce height when hidden

  return (
    <div className={`fixed top-[56px] left-[1258px] z-10 w-[265px] bg-white  ${containerHeight}`}>
      {/* Header Section (Workers Info) */}
      <div className="w-[265px] left-[20px] h-[40px] flex items-center justify-between relative">
        {/* Arrow and Title */}
        <div className="flex items-center">
          <h1 className="text-sm font-bold">Workers Info</h1>
          {/* Display the arrow depending on list visibility */}
          <FaChevronDown
            onClick={() => setIsListVisible(!isListVisible)}
            className={`text-[#B2B2B2] text-[18px] ml-2 cursor-pointer ${isListVisible ? 'rotate-180' : ''}`}
          />
        </div>
      </div>

      {/* Search Bar Section */}
      <div className="w-[235px] h-[39px] absolute top-[60px] left-[15px] flex items-center justify-between opacity-100 bg-[#f2f2f2] ">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-[200px] h-[30px] p-2 text-sm bg-[#f2f2f2] rounded-l-lg focus:outline-none"  // Background added
        />
        <FaSearch className="text-[#B2B2B2] text-[18px] mr-2" />
      </div>

      {/* Default View - Only the Arrow if List is Hidden */}
      {!isListVisible && (
        <div className="w-full h-[500px] flex flex-col items-center justify-center mt-10">
          {/* No additional elements since Show List and its arrow are removed */}
        </div>
      )}

      {/* Worker List View (only shown when isListVisible is true) */}
      {isListVisible && (
        <div className="w-full h-[300px] overflow-y-scroll scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200 p-2 mt-[45px] bg-transparent transition-all duration-300">
          {/* No results message */}
          {filteredWorkers.length === 0 && (
            <div className="text-center text-sm text-[#B2B2B2]">No users found</div>
          )}

          {/* Display filtered workers */}
          {filteredWorkers.map((worker, index) => (
            <div key={index} className="flex items-center justify-between w-full h-[60px] mb-4 p-2 border-b">
              <div className="w-[40px] h-[40px] bg-gray-300 rounded-full"></div> {/* Profile Picture Placeholder */}
              <div className="flex flex-col ml-2">
                <span className="font-semibold text-sm">{worker.name}</span>
                <span className="text-xs text-[#B2B2B2]">{worker.phone}</span>
              </div>
              <div
                className={`w-[15px] h-[15px] rounded-full ${worker.status === 'connected' ? 'bg-[#37C634]' : 'bg-[#FC1C37]'}`}
              ></div> {/* Status Circle */}
            </div>
          ))}

          {/* Hide List Button */}
          <button
            onClick={() => setIsListVisible(false)}
            className="mt-4 text-sm text-[#B2B2B2] flex items-center gap-2"
          >
            Hide List <FaChevronUp className="text-[#B2B2B2]" />
          </button>
        </div>
      )}
    </div>
  );
}

export default ListWorker;
