import React, { createContext, useState } from 'react'

export let AuthContext = createContext()

export const AuthContextProvider = ({children}) => {

    let [isAuth, setisAuth] = useState(false)

    let isAuthTrue = ()=>setisAuth(true)

    let isAuthFalse = ()=>setisAuth(false)

    let val = {
        isAuth,
        isAuthTrue,
        isAuthFalse
    }

  return (

    <AuthContext.Provider value={val}>
        {children}
    </AuthContext.Provider>

  )
}
