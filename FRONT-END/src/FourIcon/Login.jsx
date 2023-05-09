import { Box, Button, Input, Text, Checkbox, useToast } from "@chakra-ui/react"
import { useState, useContext } from "react"
import {AuthContext} from "../AuthContectProvider/AuthContextProvider"
import { Navigate, useNavigate } from "react-router-dom"
import axios from "axios"

export const Login = () => {

  let [show, setShow] = useState(false)

  const toast = useToast()

  let [signup, setSignup] = useState(false)

  let {isAuth, isAuthTrue, isAuthFalse, setNewNAme} = useContext(AuthContext)

  

  let [email, setEmail] = useState("")
  let [password, setPAssword] = useState("")
  
  let navigate = useNavigate()


  let handelSubmit = ()=>{
    

    axios.get(`https://mock-chak.onrender.com/users`)
    .then((res)=>{
        let data = res?.data

        let result = data.filter((ele)=>{
          if(ele.email==email && ele.password==password){
            return true
          }
          else{
            return false
          }
        })

        if(result.length>0){
          setNewNAme(`${result[0].firstName} ${result[0].lastName}`)
          toast({
            title: 'SUCCESFULLY LOGGED IN',
            status: 'success',
            duration: 2000,
            position:"top-right",
            isClosable: true,
          })
          isAuthTrue()
          setTimeout(() => {
            navigate("/")
          }, 3000);
        }
        else{
          toast({
            title: 'WRONG CREDENTIALS',
            status: 'error',
            duration: 2000,
            position:"top-right",
            isClosable: true,
          })
          isAuthFalse()
        }
    })

    setEmail("")
    setPAssword("")
  
  }


  if(isAuth==false){
    localStorage.clear()
  }
  

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
            value={email}
            name="email"
            onChange={(e)=>setEmail(e.target.value)}
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
            value={password}
            name="password"
            onChange={(e)=>setPAssword(e.target.value)}
            />
            <br />
            <br />
            <Checkbox border={".5px solid black"} onChange={handelShow} mt="6px"/>&emsp; show password
            <br />
            <br />
            <Button fontSize={"14px"} _hover={{bg:"black", color:"red"}} bg="white" color="black" border="1px solid black" borderRadius={"25px"}>
              Forgot Your Password ?
            </Button>
            <br />
            <br />
            <Button  bg="black" color="white" border="1px solid black" borderRadius={"25px"} onClick={handelSubmit} >
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
