import { Box, Button, Input, Text, InputGroup, InputLeftAddon, Flex, FormControl, Stack, Toast, useToast} from '@chakra-ui/react'
import React, { useContext, useReducer, useState } from 'react'
import { AuthContext } from '../AuthContectProvider/AuthContextProvider'
import { AddressDetails } from './AddressDetails'
// private route

let ini = {
  HouseNo : "",
  TowerNo  : "",
  Building : "",
  Address : "",
  Landmark : "",
  phoneNo : "",

}

function reducer(state, action){
  switch (action.type){
    case "change" :{
      return {
          ...state,
          [action.payload.name] : action.payload.value
      }
  }

  
  case "reset" :{
      return {
          ...ini
      }
  }

  default : {
      throw new Error(`invalid action type`)
  }
  }
}

export const Account = () => {

  let {isAuth, name} = useContext(AuthContext)

  let [addAddress, setAddAddress] = useState(false)
  
  let [userData, setUserData] = useState(JSON.parse(localStorage.getItem("Address"))||[])

  let [formData, dispatch] = useReducer(reducer, ini)

  let [address, setAddress] = useState([])

  let toast = useToast()


  let [add, setadd] = useState(false)

  let handelAddress = ()=>{
    setAddAddress(!addAddress)
  }

  let handelChange = (e) =>{
    // setadd(false)
    let {name, value} = e.target

    let payload = {
        name : name,
        value : value
    }

    dispatch({type:"change", payload:payload})
}

let handelSubmit = (e)=>{
  e.preventDefault()
  let data = {...formData}
  
  setUserData((prev)=>([
    ...prev,
    data
  ]))

  const existingAddress = JSON.parse(localStorage.getItem('Address')) || []
        const itemExists = existingAddress.some((item) => item.id === data.id)
    
        if (!itemExists) {
          const cartItem = { ...data }
          const newAddress = [...existingAddress, cartItem]
          localStorage.setItem('Address', JSON.stringify(newAddress))
          setAddress(newAddress)
          
          
        }
       
        
  

dispatch({type:"reset"})
}

const handleDelete = (id) => {
  const updatedAddress = userData.filter((ele, ind) => ind !== id - 1);
  setUserData(updatedAddress);

  
};


  return (
    <div>
        <Box mt="60px">
                <Text textAlign={"center"} fontSize={"30px"} fontWeight={"bold"}>{name}</Text>
             {
              isAuth ? (
                <Box m="auto" ml="50px">
                <Button mt="40px" _hover={{bg:"red", color:"white"}} bg="black" color="white" onClick={handelAddress}>Add New Address</Button>

                {
                  addAddress && <>
                  
                  <Box w="70%" m="auto" padding="10px" boxShadow={"lg"}>
                  <Text mb="10px" textAlign={"center"} fontSize={"30px"} fontWeight={"bold"}>Enter Details</Text>
                  
                  <form>
                    <FormControl>
                      <Stack spacing={4}>
                  <Input  mb="10px" name="HouseNo" value={formData.HouseNo}  type="text" placeholder='Please enter the Hose No.' onChange={handelChange} ></Input>
                  <Input mb="10px" name="TowerNo" type="text" value={formData.TowerNo} placeholder='Please enter the Tower No.'onChange={handelChange} ></Input>
                  <Input mb="10px" name='Building' type="text" value={formData.Building} placeholder='Please enter the Building / Apartment No.' onChange={handelChange}></Input>
                  <Input mb="10px" name="Address" type="text" value={formData.Address} placeholder='Please enter the Addresss' onChange={handelChange}></Input>
                  <Input mb="10px" name="Landmark" type="text" value={formData.Landmark} placeholder='Please enter the LandMark' onChange={handelChange}></Input>
                  <InputGroup mb="10px">
                  <InputLeftAddon children='+91' />
                  <Input name="phoneNo" type='tel' value={formData.phoneNo} placeholder='phone number' onChange={handelChange}/>
                  </InputGroup>
                  <br />
                  <Button colorScheme={"green"} className="submitBtn"  onClick={handelSubmit}>
							    Submit
						      </Button>
                      </Stack>
                    </FormControl>
                  </form>
                  
                </Box>
                </>
                  
              }
             </Box>
              ) : (
                <Box>
                  <Text textAlign={"center"} fontWeight={"bold"}>PLEASE LOG IN TO SEE YOUR ACCOUNT</Text>
                </Box>
              )
             }


             {
              userData.length > 0 && <Box mt="10px">

              <Text textAlign={"center"} fontWeight={"bold"} fontSize={"25px"}>ADDRESS</Text>

              <Box>


                {
                  userData.map((ele,index)=>(
                    
                    // <Box   display={"flex"} flexDirection={"column"} justifyContent={"center"}>

                      <Box textAlign={"center"} padding="50px" boxShadow={"dark-lg"} w="50%" m="auto" mb="20px"> 
                      <AddressDetails 
                    handelDelete = {handleDelete}
                    id = {index+1}
                    {...ele}
                    />
                    </Box>
                    // </Box>
                    
                    
                  ))
                }

              </Box>


             </Box>
             }
        </Box>
    </div>
  )
}
