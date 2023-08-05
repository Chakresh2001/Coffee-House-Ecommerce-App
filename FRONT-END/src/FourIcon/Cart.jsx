import { Box, Image, Text, Flex, Button, useToast, Input } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Footer } from '../Pages/Footer'
import { AuthContext } from '../AuthContectProvider/AuthContextProvider'

function Discount ({handelChange,handelClickDis}){
  console.log(handelChange,handelClickDis)
  return (
    <Box mt="30px">
      
        <Box>
        <Input border="1px solid black" type="text"  placeholder={"Enter discount Code"} onChange={handelChange}/>
        </Box>
          <br />
          <br />
        <Box>
        <Button mb="15px" ml="70px" bg="black" color="white" borderRadius={"25px"} _hover={{bg:"black", color:"white"}}  onClick={handelClickDis}>APPLY DISCOUNT</Button>
        </Box>
        
      
    </Box>
  )
}

export const Cart = () => {

  let toast = useToast()

  let [cartItem, setCartItem] = useState([])

  let [total, setTotal] = useState(0)

  let [discount, setDiscount] = useState(false)

  let [dis, setDis] = useState("")

  let address = localStorage.getItem("Address")



  useEffect(()=>{
    let avilable = JSON.parse(localStorage.getItem("cartItems")) || []
    setCartItem(avilable)
  },[])

  useEffect(()=>{
    let value = cartItem.reduce((acc, ele) => acc + ele.price * ele.quantity, 0).toFixed(2)
    setTotal(Number(value))
  },[cartItem ])

  let handelDiscount =()=>{
    setDiscount(!discount)
  }

  let handelChange =(e)=>{
   setDis(e.target.value)
  } 

  let handelDelete = (id) => {
    const updatedItems = cartItem.filter((item) => item.id !== id)
    localStorage.setItem('cartItems', JSON.stringify(updatedItems))
    setCartItem(updatedItems)
  }

  let handelClickDis = ()=>{
    if(total > 60){
      if(dis=="Coffee"){
        toast({
          title: 'Discount Applied',
          status: 'success',
          duration: 2000,
          position:"top-right",
          isClosable: true,
        })
        let res = total - 10
        return setTotal(res)
      }
      else{
        toast({
          title: 'Value Less Than $60',
          status: 'error',
          duration: 2000,
          position:"top-right",
          isClosable: true,
        })
      }
    }
    
    
  }

  return (
    <div>
      <Box bg="#F0ECEC">
      <Box >
        <Box padding="40px"><Text fontSize={"40px"} fontWeight={"bold"}>Shopping Cart</Text></Box>

       <Box mt="40px"  display={"flex"} justifyContent={"space-around"}>
       <TableContainer  minWidth='1000px' mb="40px" borderRadius='lg' boxShadow='lg'>
  <Table  variant='simple'  >
    <Thead>
      <Tr>
        <Th textAlign={"center"}  w='25%' colspan="2">Item</Th>
        <Th textAlign={"center"}  w='25%'>Price</Th>
        <Th textAlign={"center"}  w='25%'>Qty</Th>
        <Th textAlign={"center"}  w='25%'>Subtotal</Th>
      </Tr>
      <hr />
    </Thead>
    <Tbody>
      {cartItem.map((ele) => (
        <Tr  key={ele.id}>
          <Td textAlign={"center"} w='25%' colspan="2">
            <Flex alignItems='center'>
              <Image src={ele.image} borderRadius='md' boxSize='100px' mr="4"/>
              <Text fontWeight='medium'>{ele.name}</Text>
            </Flex>
          </Td>
          <Td  textAlign={"center"} w='25%'>${ele.price.toFixed(2)}</Td>
          <Td  textAlign={"center"} w='25%'>{ele.quantity}</Td>
          <Td  textAlign={"center"} w='25%' >${(ele.price * ele.quantity).toFixed(2)}</Td>
          <Td color="brown" onClick={() => handelDelete(ele.id)} _hover={{cursor:"pointer"}}>Delete</Td>
        </Tr>
      ))}
    </Tbody>
    <Tfoot>
      <Tr>
        <Th></Th>
        <Th></Th>
        <Th>Total</Th>
        <Th isNumeric>${cartItem.reduce((acc, ele) => acc + ele.price * ele.quantity, 0).toFixed(2)}</Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
              <Box mb="40px" backgroundColor={"white"} borderRadius='lg' boxShadow='lg' w="20%">
                <Text fontWeight={"bold"} fontSize={"20px"} textAlign={"center"}>SUMMARY</Text>
                <hr />
                <Box>

                  <Box mt="10px" display={"flex"} justifyContent={"space-evenly"}>
                  <Text fontWeight={"bold"}>SubTotal :</Text>
                  <Text>{total}</Text>
                  </Box>  

                  <Box mt="10px" display={"flex"} justifyContent={"space-evenly"}>
                  <Text fontWeight={"bold"}>Shipping Charges :</Text>
                  <Text>$ 7</Text>
                  </Box>
                  
                  <Box mt="10px" display={"flex"} justifyContent={"space-evenly"}>
                  <Text fontWeight={"bold"}>Order Total :</Text>
                  <Text>{total+7}</Text>
                  </Box>


                  <Box mt="40px">
                    <Box>
                    <Text textAlign={"center"} onClick={handelDiscount} _hover={{cursor:"pointer"}}>APPLY DISCOUNT</Text>
                    </Box>
                    <Box>
                    {discount && <Discount
                    handelChange = {handelChange}
                    handelClickDis = {handelClickDis}
                    />}

                    </Box>
                  </Box>
                      {
                        address ? (
                          <Box  display="flex" justifyContent={"center"} >
              <Link to={"/checkout"}><Button mb="10px" mt="15px" bg="#F20100" color="white" borderRadius={"25px"} _hover={{bg:"#F20100", color:"white"}}>
              CHECKOUT
              </Button></Link>
              
              </Box>
                        ) : (
                          <Box  display="flex" justifyContent={"center"} mt="5px" mb="5px" fontWeight={"bold"} >
                            Kindly Add Your Address to proceed
                          </Box>
                        )
                      }
                  
                </Box>

              </Box>


       </Box>


      </Box>
      </Box>

      
      <Box mt="40px">
        <Footer/>
       </Box>
    </div>
  )
}
