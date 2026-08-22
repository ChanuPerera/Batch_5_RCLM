import React, { useContext, useEffect, useReducer, useRef, useState } from "react";


const ReactFunctional = () => {

    ///////////// useState /////////////
    const [count , setCount] = useState(0);
    const [weight , setWeight] = useState(0);

    console.log("render ui");

    /////////////// useEffect //////////////


    ///// Without Dependency Array 
    useEffect(() => {
        console.log("useEffect 1")
    }) ////// re-render



    ///// With Empty Dependency Array 
    useEffect(() => {
        console.log("component did mount or update")

        return() => {
            console.log("useEffect 2 , component will mount")
        }
    },[])




    ///// Dependency Array with value
    useEffect(() => {
        console.log("triggered by weight");
        console.log("triggered by count");

        // if(count > 2){
        //     console.log("component did update")
        //     console.log("new state", count)
        // }
    },[count , weight])


    ///// Dependency Array with value
    useEffect(() => {
        if(weight > 2){
            console.log("weight component did update")
            console.log("new weight state", weight)
        }
    },[weight])



   





    return(
        <div style={{textAlign:"center", marginTop:"100px"}}>
             <h1 className="text-3xl font-bold underline">React Functional Component</h1>
            <p style={{fontSize:24}}> Count: {count}</p>
         <p style={{fontSize:24}}> Weight: {weight}</p>
            <button
                onClick={() => setCount(count + 1)}
            >
                Increase Count
            </button>


             <button
                onClick={() => setWeight(weight + 1)}
                className="p-2 bg-green-500 rounded-md text-red-400"
            >
                Increase Weight
            </button>


        </div>
    );
}




export default ReactFunctional;




