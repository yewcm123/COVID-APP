import React, {useEffect, useState} from 'react';
import 'primeflex/primeflex.css';
import { AiOutlineMenu } from 'react-icons/ai';
import { useStateContext } from '../contexts/ContextProvider'


const NavButton = ({title, customFunc, icon}) =>(
    <button
        type='button'
        onClick={customFunc}
        className="relative bg-white border-circle border-none text-xl p-3 hover:bg-gray-100 cursor-pointer hover:shadow-3"
    >
        {icon}
    </button>
)


const NavBar = () => {

    const { setActiveMenu, activeMenu } = useStateContext();
     return (
        <div className='flex justify-content-between p-2 md:mx-6 relative'>
            <NavButton
                title='Menu'
                customFunc={()=>setActiveMenu(!activeMenu)}
                icon={<AiOutlineMenu/>}
            />
            <div>
                time
            </div>


    </div>
  )
}

export default NavBar