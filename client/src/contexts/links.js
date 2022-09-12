import React from "react";
import { primeicons } from 'primeicons/primeicons.css'
import { TbDashboard, TbReportAnalytics, TbCompass, TbBiohazard } from "react-icons/tb";

export const links = [
    {
        title: 'Main',
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
                name: 'Covid Cases Chart',
                nav_link: 'CovidCasesChart',
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

export const dispBlock = [
    {
        title: 'Daily Changes',
        dataDetails: [
            {
                dispTitle: 'New Cases',
                icon: (<TbBiohazard />),
                iconColor: 'blue',
                color:'#ff4032'

            },
            {
                dispTitle: 'Recovered Cases',
                icon: (<TbBiohazard />),
                iconColor: 'blue',
                color:'#6ebe71'
            },
            {
                dispTitle: 'Deceased Cases',
                icon: (<TbBiohazard />),
                iconColor: 'blue',
                color:'#BDBDBD'
            }
        ]
    }
]