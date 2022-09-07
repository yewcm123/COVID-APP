import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Pie }  from './components/charts/Pie';
import 'primeflex/primeflex.css';
import './App.css';
import SideBar from './components/SideBar';
import NavBar from './components/NavBar';
import Overview from './pages/Overview';
import HotspotLocation from './pages/HotspotLocation';

import { useStateContext } from './contexts/ContextProvider';
import DailyCovidCases from './pages/DailyCovidCases';

const App = () => {
    const { activeMenu } = useStateContext();
    return(
        <div className='flex relative '>
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
                <div className='fixed md:static navbar w-full'>
                    <NavBar/>
                </div>
                <div>
                    <Routes>
                        {/* Main Page */}
                        <Route path='/Overview' element={<Overview/>} />
                        {/* Charts */}
                        <Route path='/DailyCovidCases' element={<DailyCovidCases/>} />
                        <Route path='/HotspotLocation' element={<HotspotLocation/>} />
                    </Routes>
                </div>
            </div>
                
            </BrowserRouter>         
            
        </div>
    )
    
}

export default App;