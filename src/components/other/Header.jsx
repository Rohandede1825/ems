import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between '>
        <h1 className='text-xl font-bold'>hello  <br /> <span className='text-3xl font-semibold'>rohan</span> </h1>
        <button className='bg-red-500 text-lg  text-white px-5 py-2 rounded-lg'>logout</button>
    </div>
  )
}

export default Header