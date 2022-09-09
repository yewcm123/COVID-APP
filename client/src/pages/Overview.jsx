import React, { useState } from 'react'
import Header from '../components/Header'
import LineChart from '../components/charts/LineChart'
import { TbBiohazard } from 'react-icons'
import { dispBlock } from '../contexts/links'

const DispBlock = ({category, icon, color}) =>{

  return(
    <div className='dispblock bg-white w-10rem h-5rem p-4 block mt-5 m border-round-3xl font-bold text-400 text-gray-700'>
      <div className='flex font-bold  text-gray-700'>
        <div className='border-circle flex align-items-center justify-content-center' style={{backgroundColor: color}}>
          <div className='flex p-2 text-2xl align-items-center justify-content-center'>
            {icon}
          </div>
        </div>
      </div>
      <span>{category}</span>
    </div>
  )
}

const Overview = () => {
  return (
    <div className='h-full m-5 p-2 pt-3 border-round-3xl'>
        <Header category='Main' title='Overview'/>
            {dispBlock.map((item)=> (
                    <div key={item.title} className='m-4 flex flex-wrap'>
                        {item.dataDetails.map((block) => (
                            <div key={block.dispTitle}>
                                <DispBlock category={block.dispTitle} icon={block.icon} color={block.color} />
                            </div>
                        ))}
                </div>
            ))}
        
    </div>
  )
}

export default Overview