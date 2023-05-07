import { Box, Image, Text, Flex, Button, useToast, Link } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
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
import { Navigate } from 'react-router-dom'

function Discount ({handelChange,handelClickDis}){
  console.log(handelChange,handelClickDis)
  return (
    <Box mt="30px">
      <Text>Enter Discount Code</Text>
      <input type="text"  placeholder={"Enter discount Code"} onChange={handelChange}/>
      <Button onClick={handelClickDis}>APPLY DISCOUNT</Button>
    </Box>
  )
}

export const Cart = () => {

  let toast = useToast()

  let [cartItem, setCartItem] = useState([])

  let [total, setTotal] = useState(0)

  let [discount, setDiscount] = useState(false)

  let [dis, setDis] = useState("")



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
      <Box>
        <Box><Text fontSize={"40px"} fontWeight={"bold"}>Shopping Cart</Text></Box>

        <TableContainer maxW="100%">
          <Table  textAlign={"center"} variant='simple' colorScheme='gray' bg='white' borderRadius='lg' boxShadow='lg'>
            
            <Thead>
              <Tr>
                <Th>Item</Th>
                <Th>Price</Th>
                <Th isNumeric>Qty</Th>
                <Th>Subtotal</Th>
              </Tr>
            </Thead>
            <Tbody>
            {cartItem.map((ele) => (
  <Tr key={ele.id}>
    <Td w='25%'>
      <Flex alignItems='center'>
        <Image src={ele.image} borderRadius='md' boxSize='100px' mr='4' />
        <Text fontWeight='medium'>{ele.name}</Text>
      </Flex>
    </Td>
    <Td border="1px solid black">${ele.price.toFixed(2)}</Td>
    <Td>{ele.quantity}</Td>
    <Td isNumeric>${(ele.price * ele.quantity).toFixed(2)}</Td>
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


              <Box>
                <Text>SUMMARY</Text>
                <hr />
                <Box>

                  <Box>
                  <Text>SubTotal</Text>
                  <Text>{total}</Text>
                  </Box>  

                  <Box>
                  <Text>Shipping Charges</Text>
                  <Text>$ 7</Text>
                  </Box>
                  
                  <Box>
                  <Text>Order Total</Text>
                  <Text>{total+7}</Text>
                  </Box>


                  <Box mt="50px">
                    <Text onClick={handelDiscount}>APPLY DISCOUNT</Text>

                    {discount && <Discount
                    handelChange = {handelChange}
                    handelClickDis = {handelClickDis}
                    />}

                  </Box>

                  
                </Box>
              </Box>


              <Button bg="#F20100" color="white" borderRadius={"25px"} _hover={{bg:"#F20100", color:"white"}}>
              <Link to="/checkout"> CHECKOUT </Link>
              </Button>

      </Box>
    </div>
  )
}
