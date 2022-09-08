import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {

    const [ activeMenu, setActiveMenu ] = useState(true);
    const [ data, setData ] = useState(null);


    return (
        <StateContext.Provider 
        value={{
            activeMenu, setActiveMenu,
            data, setData

        }}
        >            
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext (StateContext);