import React, { createContext, useState } from 'react'

export let AuthContext = createContext()

export const AuthContextProvider = ({children}) => {

    let [isAuth, setisAuth] = useState(false)

    let [name, setname] = useState(null)
    
    let isAuthTrue = ()=>setisAuth(true)

    let isAuthFalse = ()=>setisAuth(false)

    let setNewNAme = (val)=>setname(val)

    let val = {
        isAuth,
        name,
        isAuthTrue,
        isAuthFalse,
        setNewNAme
    }

  return (

    <AuthContext.Provider value={val}>
        {children}
    </AuthContext.Provider>

  )
}
