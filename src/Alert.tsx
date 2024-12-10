

function Alert() {
  return (
    <div className="w-[310px] h-[60px] bg-[#FF334B] border-[#D81C32]  fixed top-[80px] left-[70px] rounded-lg  p-3 flex flex-col justify-between ">
      {/* Alert Text */}
      <div className="flex justify-between items-center">
        <p className="text-sm font-semibold text-white">Alert from John D.</p>
        <span className="text-xs text-[#8D0919]">1 min</span>
      </div>

      {/* Address */}
      <p className="text-xs text-[#8D0919]">
        2517 Late Avenue, Ponca City, OK 74601
      </p>






      
    </div>
  );
}

export default Alert;
