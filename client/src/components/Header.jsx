import React from 'react'

const Header = ({ category, title }) => (
    <div>
        <p className='text-gray-500 text-lg ml-3 mt-3 mb-2'>
            {category}
        </p>
        <p className='text-gray-900 text-3xl font-bold ml-3 mt-2 mb-2' style={{letterSpacing: '-.025em'}}>
            {title}
        </p>
    </div>
)

export default Header