import React, {useEffect, useState} from 'react';
import 'primeflex/primeflex.css';
import { AiOutlineMenu } from 'react-icons/ai';
import { useStateContext } from '../contexts/ContextProvider'
import { Tooltip } from 'primereact/tooltip';
import { Button } from 'primereact/button';
import "primereact/resources/themes/lara-light-indigo/theme.css"
import 'primeicons/primeicons.css';
import "primereact/resources/primereact.min.css";                  //core css

const NavButton = ({title, customFunc, icon, color, tooltipText}) =>(
    <button
        type='button'
        onClick={customFunc}
        className="relative bg-white border-circle border-none text-xl p-3 hover:bg-gray-100 cursor-pointer hover:shadow-3"
        style={{color}}
        tooltip='tooltip'
    >
        {icon}
    </button>
)


const NavBar = () => {

    const { setActiveMenu, activeMenu } = useStateContext();
     return (
        <div className='flex justify-content-between p-2 md:mx-6 relative '>
            <Button  
                icon='pi pi-bars' 
                onClick={()=>setActiveMenu(!activeMenu)} 
                tooltip='Menu' 
                className='button-menu p-button-raised p-button-circle p-button-icon-only  '
                iconPos='top'          
            />
            {/* <NavButton
                title='Menu'
                customFunc={()=>setActiveMenu(!activeMenu)}
                icon={<AiOutlineMenu/>}
                color={'#2196f3'}
                tooltipText='Menu'
            /> */}
            
            <div>
                time
            </div>


    </div>
  )
}

export default NavBar