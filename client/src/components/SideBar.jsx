import React from "react";
import { Link, NavLink } from 'react-router-dom';
import 'primeflex/primeflex.css';
import { primeicons } from 'primeicons/primeicons.css'
import { TbCircles, TbReportAnalytics, TbCompass } from "react-icons/tb";
import { GrMapLocation } from 'react-icons/gr'
import { links } from '../contexts/links';
import { useStateContext } from "../contexts/ContextProvider";

const SideBar = () => {
    const { activeMenu, setActiveMenu } = useStateContext();

    const activeLink = 'flex align-items-center gap-5 pl-4 pt-3 pb-2 m-2 border-round-lg border-yellow text-100 text-base';
    const normalLink = 'flex align-items-center gap-5 pl-4 pt-3 pb-3 m-2 -round-lg text-gray-700 hover:bg-light-gray ';


    return (
        <div className="pl-2 h-screen md:overflow-hidden sidebar overflow-auto md:hover:overflow-auto pb-10">
            {activeMenu && (
                <>
                    <div>
                        <div className="flex block justify-content-between align-items-center" style={{width:'300px'} }>
                            <Link to='/' onClick={()=>{}} className="flex text-gray-900 align-self-center gap-3 ml-1 mt-3 text-xl font-bold" style={{ textDecoration: 'none'}}>
                                <TbCircles size={35} /> <span className="block pt-2" style={{letterSpacing:'-.025em'}}>COVID-19 Case Tracker</span>
                            </Link>           
                        </div>
                        <div className='mt-6' >
                            {links.map((item) => (
                                <div key={item.title}>
                                    <div>
                                        <span className="p-3 m-3 mt-4 text-xl font-bold text-400 text-gray-800">{item.title}</span>
                                    </div>
                                {item.links.map((link) => (
                                    <NavLink
                                        to={`/${link.nav_link}`}
                                        key={link.name}
                                        style={{ textDecoration: 'none'}}
                                        className={`border-round-2xl text-lg hover:bg-gray-100 ${normalLink}`}     
                                    >
                                        <i className={'text-2xl sidebar-item'} >
                                            {link.icon}
                                        </i>
                                        <span className=" sidebar-item">
                                            {link.name}
                                        </span>
                                    </NavLink>
                                ))}
                                    
                                    
                                </div>
                                    
                            ))}
                        </div>
                    </div>
                   
                </>
            )}

        </div>
    )
}

export default SideBar;