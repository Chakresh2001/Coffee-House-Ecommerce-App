import React, { useContext, useReducer, useState } from 'react'
import { Box,Checkbox,Flex,Input,Text,Button,useToast  } from '@chakra-ui/react'
import { Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {AuthContext} from "../AuthContectProvider/AuthContextProvider"

let ini = {
  firstName : "",
  lastName : "",
  email : "",
  password : "",
  
}

function reducer(state, action){
  switch(action.type){
    case "change" : {
      return {
        ...state,
        [action.payload.name] : action.payload.value
      }
    }
    case "reset":{
      return {
        ...ini
      }
    }
    default : {return {state}}
  }
}

export const Signup = () => {

  const toast = useToast()

  let [back, setBack] = useState(false)

  let [check, setCheck] = useState("")

  let navigate = useNavigate()

  let [formData, dispatch] = useReducer(reducer, ini)

  

 

  


  let handelChange = (e)=>{
    let {value,name} = e.target
    let obj = {
      name : name,
      value : value
    }
    dispatch({type:"change", payload:obj})
  }
  

  let handelSubmit=(e)=>{



    if(check!==formData.password){
      return toast({
         title: 'Password Mismatch',
         description:"Password and Confirm Password Mismatch",
         status: 'error',
         duration: 3000,
         isClosable: true,
         position:"top-right"
       })
     }
    
    const {firstName, lastName, email, password} = formData
    const name = `${firstName} ${lastName}`
    let obj = {
      name : name,
      email : email,
      password : password
    }

    axios.post(`https://worrisome-bass-hosiery.cyclic.cloud/user/register`,obj)
        .then((res)=>{
          console.log(res)
          toast({
            title: 'Account created.',
            description: "We've created your account for you.",
            status: 'success',
            duration: 2000,
            isClosable: true,
          })
          setTimeout(() => {
            navigate("/login")
          }, 3000);
    })
    .catch((err)=>{
      console.log(err.response.data.error)
      toast({
        title: err.response.data.error,
        status: 'error',
        duration: 2000,
        isClosable: true,
      })
    })
     
    
   dispatch({type:"reset"})
   setCheck("")
}




  let handelBack=()=>{
    setBack(true)
  }
  if(back){
    return <Navigate to="/login"/>
  }
  


  return (
    <div>

       <Box bg="#F0EDED" padding="50px">


       <Box  width="90%" margin="auto">
       <Text  fontWeight={"semibold"} fontSize={"40px"} mb="50px">Create New Customer Account</Text>

       <Box padding="20px"border="1px solid black" >

        
        
        <Flex ml="28px" gap="20px">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" rokeWidth="2" kelinecap="round" rokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
        <Text fontWeight={"semibold"} fontSize={"20px"}>Personal Information</Text>
        </Flex>
        

        <Flex justifyContent={"space-around"} mt="25px">
          <Box width="46%">
          <label >First Name</label>
          <br />
          <br />
          <Input 
          border="1px solid black"
          focusBorderColor='black'
          name="firstName"
          value={formData.firstName}
          onChange={handelChange}
          />
          </Box>
          <Box width="46%">
          <label >Last Name</label>
           <br />
           <br />
          <Input
          focusBorderColor='black'
          border="1px solid black"
          name="lastName"
          value={formData.lastName}
          onChange={handelChange}
          />
          </Box>
        </Flex>

        <Flex gap="20px" mt="25px" flexDirection={"column"} ml="28px">
          <Box>
          <Checkbox  mt="5px" border="0.5px solid black"/>&emsp; Letta e compresa l’informativa sulla privacy acconsento al trattamento dei miei dati personali per finalità di marketing diretto.
          </Box>
          <Box>
          <Checkbox mt="5px" border="0.5px solid black"/>&emsp; Having read and understood the privacy policy, I hereby consent to the processing of my personal data for profiling purposes.
          </Box>
        </Flex>

        </Box>
       </Box>


        


        <Box mt="50px">
        <Box padding="20px" width="90%" border="1px solid black" margin="auto">
        
        <Flex mb="25px" ml="28px" gap="20px">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" rokeWidth="2" kelinecap="round" rokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
        <Text fontWeight={"semibold"} fontSize={"20px"}>Sign-in Information</Text>
        </Flex>

        <Box  w="96%" margin="auto">
        <label >Email</label>
          <br />
          <br />
          <Input name="email" value={formData.email} onChange={handelChange} focusBorderColor='black' border="1px solid black"/>
        </Box>
        

        <Flex justifyContent={"space-around"} mt="25px">
          <Box width="46%">
          <label >Password</label>
          <br />
          <br />
          <Input 
          border="1px solid black"
          focusBorderColor='black'
          name="password"
          value={formData.value}
          onChange={handelChange}
          />
          </Box>
          <Box width="46%">
          <label >Confirm Password</label>
           <br />
           <br />
          <Input
          focusBorderColor='black'
          border="1px solid black"
          value={check}
          onChange={(e)=>setCheck(e.target.value)}
          />
          </Box>
        </Flex>

        </Box>
        </Box>


        <Flex mt="80px" justifyContent={"flex-end"} gap="30px" width="95%">
          <Button onClick={handelBack} border="1px solid black" background={"white"} _hover={{bg:"black", color:"red"}} borderRadius={"28px"}>BACK</Button>
          <Button onClick={handelSubmit} border="1px solid black" background={"black"} color="white" _hover={{bg:"black", color:"white"}} borderRadius={"25px"}>CREATE AN ACCOUNT</Button>
        </Flex>

      </Box>

    
    </div>
  )
}


