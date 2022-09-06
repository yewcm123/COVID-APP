import React from "react";
import { primeicons } from 'primeicons/primeicons.css'
import { TbReportAnalytics, TbCompass } from "react-icons/tb";

export const links = [
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