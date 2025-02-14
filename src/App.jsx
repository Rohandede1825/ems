import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { AuthContext } from './context/AuthProvider'
import { stringify } from 'postcss';

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInuserData, setloggedInuserData] = useState(null)
  const authData = useContext(AuthContext)
  console.log(authData);



  // useEffect(()=>{
  //   if(authData){
  //    const loggedInUser = localStorage.getItem('loggedInUser');
  //     if(loggedInUser){
  //       setUser(loggedInUser.role)
  //     }
  //   }
  // },[authData])


  const handleLogin = (email, passwoord) => {
    if (email === 'admin@gmail.com' && passwoord === 'admin') {
      setUser({ role: 'admin' })
      localStorage.setItem('loggedInUser', JSON, stringify({ role: 'admin' }))
    } else if (email== 'user@gmail.com' && passwoord === 'user') {
    
        setUser({ role: 'employee' })
       
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee' }))
      }

   else {
      alert('Invalid credentials')
    }

  }





  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard  data={loggedInuserData} />}
    </>
  )


}



export default App
