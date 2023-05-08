import { Box, Button, Input, Text, InputGroup, InputLeftAddon, Flex} from '@chakra-ui/react'
import React, { useContext, useReducer, useState } from 'react'
import { AuthContext } from '../AuthContectProvider/AuthContextProvider'
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

  let [formData, dispatch] = useReducer(reducer, [ini])

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

  let handelSubmit = ()=>{
    console.log(formData)
    // setadd(true)
    dispatch({type:"reset"})
  }

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
                  <Input  mb="10px" name="HouseNo" value={formData.HouseNo}  type="text" placeholder='Please enter the Hose No.' onChange={handelChange} ></Input>
                  <Input mb="10px" name="TowerNo" type="text" value={formData.TowerNo} placeholder='Please enter the Tower No.'onChange={handelChange} ></Input>
                  <Input mb="10px" name='Building' type="text" value={formData.Building} placeholder='Please enter the Building / Apartment No.' onChange={handelChange}></Input>
                  <Input mb="10px" name="Address" type="text" value={formData.Address} placeholder='Please enter the Addresss' onChange={handelChange}></Input>
                  <Input mb="10px" name="Landmark" type="text" value={formData.Landmark} placeholder='Please enter the LandMark' onChange={handelChange}></Input>
                  <InputGroup mb="10px">
                  <InputLeftAddon children='+91' />
                  <Input name="phoneNo" type='tel' value={formData.phoneNo} placeholder='phone number' onChange={handelChange}/>
                  </InputGroup>
                  <Flex justifyContent={"center"}>
                  <Button mb="10px" _hover={{bg:"red", color:"white"}} bg={"black"} color={"white"} borderRadius={"25px"} onClick={handelSubmit}>ADD ADDRESS</Button>
                  </Flex>
                </Box>

                 
                    <Box mt="20px">
                    <Text textAlign={"center"} >Your House No. is : {formData.HouseNo}</Text>
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
        </Box>
    </div>
  )
}
