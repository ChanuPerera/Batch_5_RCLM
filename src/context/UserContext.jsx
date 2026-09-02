import React, { createContext, useState } from "react";


////// Create Context

export const UserContext = createContext();


///////// Create Provider

export const UserProvider = ({children}) => {

    const [user, setUser] = useState({
        name:"Ayodhya",
        role:"Student",
    })


    const toggleUser = () => {
        setUser((prev) => 
                prev.name  === "Ayodhya" 
                    ? {name: "Aruna", role: "HR"}
                    : { name:"Ayodhya", role:"Student"}
        );
    }


    return(

        <UserContext.Provider value={{ user , toggleUser}}>
            {children}
        </UserContext.Provider>


    );
}