import React, { useContext, useEffect, useState } from "react";
import StudentCard from "../components/StudentCard";
import { ThemeContext } from "../context/ThemeContext";

function MapEx() {

   const {theme , toggleTheme} = useContext(ThemeContext);


  const numbers = [1, 2, 3, 4, 5];

  const multipleX = numbers.map((num) => num * 2);
  console.log("numbers", numbers);
  console.log("multipleX", multipleX);

  const scores = [45, 80, 32, 90, 60];
  const passScore = scores.filter((score) => {
    return score >= 50;
  });

  console.log("scores", scores);
  console.log("passScore", passScore);

  const TempStudentData = [
    {
      name: "Saman",
      age: 15,
      weight: 65,
    },
    {
      name: "Amara",
      age: 12,
      weight: 45,
    },
    {
      name: "Kasun",
      age: 15,
      weight: 60,
    },
    {
      name: "Anura",
      age: 16,
      weight: 61,
    },
    {
      name: "Supun",
      age: 10,
      weight: 40,
    },
    {
      name: "Ayesh",
      age: 15,
      weight: 55,
    },
    {
      name: "Kasuni",
      age: 15,
      weight: 58,
    },
  ];

  const [StudentData, setStudentData] = useState([]);

  useEffect(() => {
    if (TempStudentData.length > 0) {
      setStudentData(TempStudentData);
    }
  }, []);

  console.log("StudentData", StudentData);


  const filteredStudents = StudentData.filter((student) => student.weight > 50)


  return (
    // <div className="w-full h-screen min-h-screen max-h-screen bg-teal-800 p-5 flex justify-center items-center flex-row space-x-2">
    //   <div className="w-1/2 flex flex-col space-y-2">
    //     {StudentData.map((student, index) => (
    //         <React.Fragment key={index}>
    //             <StudentCard childStudent={student} />
    //         </React.Fragment>
    //     ))}
    //   </div>

    //   <div className="w-1/2 flex flex-col space-y-2">
    //    {filteredStudents.map((student, index) => (
    //       <div
    //         key={index}
    //         className="w-[360px] bg-white rounded-lg p-3 text-left flex flex-col "
    //       >
    //         <span className="text-gray-900 font-semibold">{student.name}</span>
    //         <span className="text-blue-600 font-semibold">{student.age}</span>
    //         <span className="text-green-900 font-semibold">
    //           {student.weight}
    //         </span>
    //       </div>
    //     ))}
    //     </div>

        
    // </div>


     <div className={`min-h-screen min-w-full ${theme === "light" ? "bg-slate-200" : "bg-gray-950"}`}>
            {/* <p>Hello 2026</p>

            <LifeCycle/> */}

            {/* <ReactFunctional/> */}

            {/* <ToDoList/> */}

            {/* <MapEx/> */}

            <button
            onClick={toggleTheme}
            className="px-4 py-2 rounded-full text-center bg-blue-500 text-white font-semibold w-[180px]"
            >
                Toggle Theme
            </button>
        </div>


  );
}

export default MapEx;
