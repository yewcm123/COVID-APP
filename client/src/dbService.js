import React, { useState, useEffect } from 'react';
import { useStateContext } from './contexts/ContextProvider';


const DbService = () => {
    const { data, setData } = useStateContext();

    useEffect(() => {
        fetch('http://localhost:5000/getAllData')
            .then(result=> result.json())
            .then(data=> JSON.parse(JSON.stringify(data)))
            .then(data=> console.log(data)
                // data.forEach((row)=> {
                //     console.log(row.date);
                // })
            )
            
            .catch((err)=>console.log(err));
    }, [])
    
    return data;

}

export default DbService