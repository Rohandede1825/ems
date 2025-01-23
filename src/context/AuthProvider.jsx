import React, {createContext, useEffect, useState} from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'


export const AuthContext = createContext();
setLocalStorage();


const AuthProvider = ({children}) => {
    const [authData, setAuthData] = useState(null);

    useEffect (() => {
        const {employee, admin} = getLocalStorage();
        setAuthData({employee, admin})
    
    }, [])
    
  
  return (
    <div>
        <AuthContext.Provider value={authData}>
        {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider