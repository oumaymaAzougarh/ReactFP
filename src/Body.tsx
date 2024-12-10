
import ArcGISMap from "./MapView"; // Import the ArcGISMap component

function Body() {
  return (
    <div className="w-[96%] h-[540px] px-[11px] py-[13px] top-40 bg-white fixed left-[60px]">
      {/* This is where the ArcGISMap component is rendered */}
      <ArcGISMap />
    </div>
  );
}

export default Body;