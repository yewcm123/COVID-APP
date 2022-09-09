import React, { useState, useEffect } from 'react';
import { useStateContext } from './contexts/ContextProvider';


const DbService = () => {
    const { setDate, setCasesNew } = useStateContext();

    useEffect(() => {
        let data = []
        fetch('http://localhost:5000/getAllData')
            .then(result=> result.json())
            // .then(data=> JSON.parse(JSON.stringify(data)))
            .then(data=> {
                setDate(data.dateArray)
                setCasesNew(data.casesNewArray)
            }) 
            
            .catch((err)=>console.log(err));
    }, [])
    return;

}

export default DbService