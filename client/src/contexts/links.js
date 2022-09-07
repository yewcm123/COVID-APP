import React from "react";
import { primeicons } from 'primeicons/primeicons.css'
import { TbDashboard, TbReportAnalytics, TbCompass } from "react-icons/tb";

export const links = [
    {
        title: 'Main Page',
        links: [
            {
                name: 'Overview',
                nav_link: 'Overview',
                icon: (<TbDashboard/>)
            },      
        ]
    },
    {
        title: 'Charts',
        links: [
            {
                name: 'Daily Covid Cases',
                nav_link: 'DailyCovidCases',
                icon: (<TbReportAnalytics/>)
            },
            {
                name: 'Hotspot Location',
                nav_link: 'HotspotLocation',
                icon: (<TbCompass/>)
            },        

        ]
    },
    

]