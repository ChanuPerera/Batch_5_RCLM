import React, { useContext } from "react";
import LifeCycle from "./test/LifeCycle";
import ReactFunctional from "./test/ReactFunctional";
import ToDoList from "./test/ToDo";
import MapEx from "./test/MapEx";
import {  ThemeProvider } from "./context/ThemeContext";
import ContextScope from "./test/ContextScope";
import Examples from "./ui/Examples";


const App = () => {

  

    return(
    



        <div className={`min-h-screen min-w-full `}>
            {/* <p>Hello 2026</p>

            <LifeCycle/> */}

            {/* <ReactFunctional/> */}

            {/* <ToDoList/> */}

            {/* <MapEx/> */}
            {/* <ContextScope/> */}

            <Examples/>

        </div>


     
    );
}

export default App;



