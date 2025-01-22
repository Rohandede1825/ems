import React, {  useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'

const App = ({}) => {


  // useEffect(() => {
  //  setLocalStorage()
  //  getLocalStorage()
  // },)


  const [user, setuser] = useState('')




  return (
    <>
      <Login />

      {!user ? <Login /> : user === 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}
      {/* <EmployeeDashboard />
      <AdminDashboard /> */}
    </>
  )
}
1.30

export default App
