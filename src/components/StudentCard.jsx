import React from "react";

function StudentCard({childStudent}) {

  return (
    <div
      
      className="w-[360px] bg-white rounded-full py-3 px-6 text-left flex flex-col "
    >
      <span className="text-gray-900 font-semibold">{childStudent.name}</span>
      <span className="text-blue-600 font-semibold">{childStudent.age}</span>
      <span className="text-green-900 font-semibold">{childStudent.weight}</span>


    </div>
  );
}

export default StudentCard;
