import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (email, passwoord) =>{
    if(email === 'admin@gmail.com' && passwoord === 'admin'){
      setUser('admin')
    }else{
      setUser('employee')
    }
    
  }


  const data = useContext(AuthContext);
  console.log(data);  

  

  return (
    <>
      {!user ? <Login  handleLogin={handleLogin}/> : ''}
      {user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
  )
}


export default App
