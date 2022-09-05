import React, { useState, useEffect } from 'react';
import  { BrowserRouter, Routes, Route } from 'react-router-dom';
import  { Pie }  from './components/charts/Pie';
import 'primeflex/primeflex.css';
import './App.css';
import {SideBar} from './components/SideBar';


import { useStateContext } from './contexts/ContextProvider';

const App = () => {
    const { activeMenu } = useStateContext();
    return(
        <div>
            <BrowserRouter>
            {activeMenu? (
                <div className='w-72 fixed bg-white'>
                    <SideBar/>
                </div>
            ): (
                <div className='w-0'>
                    <SideBar/>
                </div>
            )}
                <p className="navbar font-bold border-round border-1 surface-overlay p-4">Lorem ipsum dolor sit amet</p>
                <Pie/>
            </BrowserRouter>         
            
        </div>
    )
    
}

export default App;