import { Box, Button, Input, Text, Checkbox } from "@chakra-ui/react"
import { useState } from "react"
import { Signup } from "./Signup"
import { Navigate } from "react-router-dom"

export const Login = () => {

  let [show, setShow] = useState(false)

  let [signup, setSignup] = useState(false)


  let handelShow=()=>{
    setShow(!show)
  }

  let handelSiginUp = ()=>{
    setSignup(true)
  }

  if(signup){
    return <Navigate to="/signup"/>
  }

  return (
    <div>
      
          <Box bg="#F1ECED" paddingTop="80px" height={"580px"} display={"flex"} justifyContent={"space-around"}>

        <Box ml="100px">
         <Text fontWeight={"bold"} fontSize={"30px"}> Registered Customers</Text>
         <br />
         <br />

          <Box>
            <label>Email #</label>
   
            <Input
            mt="20px"
            focusBorderColor='black.400'
            width={"150%"}
            borderRadius={"none"}
            border="1px solid black"
            type="email"
            />
            <br />
            <br />
            <label>Password #</label>
        
            <Input
            mt="20px"
            focusBorderColor='black.400'
            width={"150%"}
            borderRadius={"none"}
            border="1px solid black"
            type= {show ? "text" : "password"}
            />
            <br />
            <br />
            <Checkbox onChange={handelShow} mt="6px"/>&emsp; show password
            <br />
            <br />
            <Button fontSize={"14px"} _hover={{bg:"black", color:"red"}} bg="white" color="black" border="1px solid black" borderRadius={"25px"}>
              Forgot Your Password ?
            </Button>
            <br />
            <br />
            <Button  bg="black" color="white" border="1px solid black" borderRadius={"25px"}>
              SIGN IN
            </Button>

          </Box>

        </Box>

        <Box ml="50px">
          <Text fontWeight={"bold"} fontSize={"30px"} >New Customers</Text>
          <br />
          <br />

          <Text fontSize={"14px"}>
          Creating an account has many benefits: check out faster, keep more than one address, track
          </Text>
          <Text fontSize={"14px"}>
          orders and more.
          </Text> 
          <br />
          <Button bg="black" color="white" border="1px solid black" borderRadius={"25px"} onClick={handelSiginUp} > CREATE AN ACCOUNT </Button>
        </Box>

      </Box>
        
    </div>
  )
}
