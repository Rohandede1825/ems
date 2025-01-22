import React from 'react'

const CreateTask = () => {
  return (
   
          <div className='p-5 bg-[#1c1c1c] mt-7 rounded-lg'>
            <form className='flex flex-wrap w-full items-start justify-between'  action="">
               <div className='w-1/2 '>
                  <div >
                    <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                    <input className='text-sm py-1 px-5 w-5/6 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 ' type="text"  placeholder='Task Title' />
                  </div>

                  <div>
                    <h3 className='text-sm text-gray-100 mb-0.5'>Date</h3>
                    <input className='text-sm py-1 px-5 w-5/6 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" />
                  </div>


                  <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Assign to </h3>
                    <input className='text-sm py-1 px-5 w-5/6 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text"  placeholder='Assign to '/>
                  </div>

                  <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                    <input className='text-sm py-1 px-5 w-5/6 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text"  placeholder='Catergy design or dev etc'/>
                  </div>
               </div>

               <div className='w-1/2'>
                  <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Task Description</h3>
                    <textarea className='w-full h-44 text-sm rounded outline-none bg-transparent border-[1px] ' type="text" />

                    <button className='bg-emerald-500 py-3 hover:bg-emerald-600 rounded text-sm mt-4 w-full'>Create Task</button>
                  </div>
                  </div>
            </form>
        </div>
   
  )
}

export default CreateTask