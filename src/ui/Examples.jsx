import React from "react";

function Examples() {
  return (
    <div className="main-body w-full min-h-screen bg-slate-300 flex flex-col gap-3">
      <div className="w-full bg-teal-600 py-3 px-4 flex flex-row justify-between">
        <div className="w-[180px] bg-white h-[40px]  text-center ">
          <span> logo</span>
        </div>

        <div className="w-[180px] bg-cyan-300 h-[40px]  text-center flex flex-row items-center gap-3 px-3">
          <span> nav 1</span>
          <span> nav 2</span>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="w-full bg-cyan-500 h-[600px] relative"
      >
        <div className="bg-cyan-100 w-1/2 h-[200px]  relative">
          <div className="w-[100px] h-[100px] bg-red-600 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">

<div className="bg-black w-[50px] h-[50px] absolute  -bottom-5 left-8">

</div>
          </div>


          <span className="text-[#f56fff] font-bold text-[45px] "> Hello</span>
        </div>
      </div>
    </div>
  );
}

export default Examples;
