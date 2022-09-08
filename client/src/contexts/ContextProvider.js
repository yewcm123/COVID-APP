import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {

    const [ activeMenu, setActiveMenu ] = useState(true);
    const [ date, setDate ] = useState(null);
    const [ casesNew, setCasesNew ] = useState(null);

    return (
        <StateContext.Provider 
        value={{
            activeMenu, setActiveMenu,
            date, setDate,
            casesNew, setCasesNew

        }}
        >            
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext (StateContext);