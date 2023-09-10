import React, { useContext } from 'react'
import { AuthContext } from './AuthContextProvider'
import { Navigate } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'

export const PrivateRoute = ({children}) => {

    let {isAuth, isAuthFalse} = useContext(AuthContext)
    const toast = useToast()

    if(!isAuth){
        toast({
            title: "Kindly Login First",
            status: 'error',
            duration: 2000,
            position:"top-right",
            isClosable: true,
          })
        return <Navigate to="/login"/>
    }


  return children
}
