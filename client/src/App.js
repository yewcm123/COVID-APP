import React, { useState, useEffect } from 'react';
import  { BrowserRouter, Routes, Route } from 'react-router-dom';
import  { Pie }  from './components/charts/Pie';
import 'primeflex/primeflex.css';
import './App.css';
import  SideBar from './components/SideBar';
import  NavBar from './components/NavBar';


import { useStateContext } from './contexts/ContextProvider';

const App = () => {
    const { activeMenu } = useStateContext();
    return(
        <div className='flex relative'>
            <BrowserRouter>
            {activeMenu? (
                <div className='w-18rem h-screen sidebar fixed bg-white'>
                    <SideBar/>
                </div>
            ): (
                <div className='w-0'>
                    <SideBar/>
                </div>
            )}
            <div className={`w-full min-h-screen ${activeMenu ? 'ml-72' : 'flex-2'}`} >
                <div className='fixed bg-white md:static navbar w-full'>
                    <NavBar/>
                </div>
                <div>
                    <Routes>
                        <Route path='/' element={<Pie/>} />
                    </Routes>
                </div>
            </div>
                
            </BrowserRouter>         
            
        </div>
    )
    
}

export default App;