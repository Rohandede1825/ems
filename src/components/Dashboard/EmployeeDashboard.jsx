import React from 'react'
import Header from '../other/Header'
import TaskListsNumber from '../other/TaskListsNumber'
import TaskList from '../TaskLIst/TaskList'

const EmployeeDashboard = ({data}) => {

  
  return (
    <div className='p-9  h-screen'>
          <Header  data = {data}/> 
          <TaskListsNumber />
          <TaskList />


    
    </div>
  )
}

export default EmployeeDashboard