import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='flex overflow-x-auto items-center justify-start gap-5 flex-nowrap h-[55%] py-5 w-full  mt-10'>
        <div className='flex-shrink-0 h-full w-[300px] bg-blue-500 rounded p-5 py-4'>
            <div className='flex justify-between items-center '>
                <h3 className='bg-yellow-500 text-sm px-3 py-1 rounded-lg'>High</h3>
                <h4>20 Feb 2024</h4>
            </div>
            <h2 className='mt-5 text-xl font-semibold '>Solve the leetcode Question</h2>
            <p className=' mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, doloribus.</p>
        </div>
        <div className='flex-shrink-0 h-full w-[300px] bg-emerald-500 rounded p-5 py-4'>
            <div className='flex justify-between items-center '>
                <h3 className='bg-red-800 text-sm px-3 py-1 rounded-lg'>High</h3>
                <h4>20 Feb 2024</h4>
            </div>
            <h2 className='mt-5 text-xl font-semibold '>Solve the leetcode Question</h2>
            <p className=' mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, doloribus.</p>
        </div>
        <div className='flex-shrink-0 h-full w-[300px] bg-yellow-500 rounded p-5 py-4'>
            <div className='flex justify-between items-center '>
                <h3 className='bg-red-800 text-sm px-3 py-1 rounded-lg'>High</h3>
                <h4>20 Feb 2024</h4>
            </div>
            <h2 className='mt-5 text-xl font-semibold '>Solve the leetcode Question</h2>
            <p className=' mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, doloribus.</p>
        </div>
        <div className='flex-shrink-0 h-full w-[300px] bg-red-500 rounded p-5 py-4'>
            <div className='flex justify-between items-center '>
                <h3 className='bg-red-800 text-sm px-3 py-1 rounded-lg'>High</h3>
                <h4>20 Feb 2024</h4>
            </div>
            <h2 className='mt-5 text-xl font-semibold '>Solve the leetcode Question</h2>
            <p className=' mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, doloribus.</p>
        </div>
       
    </div>
  )
}

export default TaskList