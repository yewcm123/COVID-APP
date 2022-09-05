import React from "react";
import { Link, NavLink } from 'react-router-dom';

import { links } from '../contexts/links';
import { useStateContext } from "../contexts/ContextProvider";

const SideBar = () => {
    const { activeMenu, setActiveMenu } = useStateContext();

    const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-black text-md m-2';
    const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-700 hover:bg-light-gray m-2';

    return (
        <div className="ml-3 md:overflow-hidden overflow-auto md:hover:overflow-auto pn-10">
            {activeMenu && (
                <>
                    HELLO WORLD LINK
                </>
            )}


        </div>
    )
}

export {SideBar};