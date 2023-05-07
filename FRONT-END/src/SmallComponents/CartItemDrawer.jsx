import { Box, Button, Image, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

export const CartItemDrawer = ({onClose}) => {

  let [cartItem, setCartItem] = useState([])

  let [total, setTotal] = useState(0)

  let [cartPage, setCartPage] = useState(false)

  useEffect(()=>{
    let avilable = JSON.parse(localStorage.getItem("cartItems")) || []
    setCartItem(avilable)
  },[])

  useEffect(() => {
    let val = 0
    cartItem.forEach((ele) => {
      val += ele.price * ele.quantity
    })
    setTotal(val)
  }, [cartItem])

  let handelDelete = (id) => {
    const updatedItems = cartItem.filter((item) => item.id !== id)
    localStorage.setItem('cartItems', JSON.stringify(updatedItems))
    setCartItem(updatedItems)
  }

  let handelPage = ()=>{
    setCartPage(true)
  }
  if(cartPage){
    onClose()
    return <Navigate to="/cart"/>

  }
  

  return (
    <div>
      <Box>
        {
          cartItem.map((ele)=>(
            <Box padding="10px">
              <Box display={"flex"} gap="40px" justifyContent={"space-around"}>
             
             <Box w={ele.id==1 || ele.id==3 ? "40%" : "50%"}>
             <Image w="80%" src={ele.image}></Image>
             </Box>
             
             <Box>
               <Text fontSize={"17px"} fontWeight={"bold"}>{ele.name}</Text>
               <br />
               <Text>$ {ele.price}</Text>
               
           </Box>

           <Button onClick={() => handelDelete(ele.id)}>Delete</Button>
            
           </Box>
           <hr />
            </Box>
          ))
        }
        
      </Box>
      <hr />

      <Box padding="30px" mt="20px">
        <Box display={"flex"} justifyContent={"space-between"}>
          <Text fontSize={"17px"} fontWeight={"bold"}>
            Cart SubTotal : 
          </Text>
          <Text fontSize={"17px"} fontWeight={"bold"}>
              $ {total.toFixed(2)}
          </Text>
        </Box>

        <Box  mt="20px"display={"flex"} flexDirection={"column"} justifyContent={"center"}>
        
        
        <Button borderRadius={"25px"} bg="white" border="1px solid black" color="black" _hover={{bg:"black", color:"white"}} onClick={handelPage}>VIEW CART</Button>
        
        <Button  borderRadius={"25px"} mt="10px" bg="red" color="white" _hover={{bg:"red", color:"white"}}>PROCEED TO CHECKOUT</Button>
        </Box>
      </Box>
    </div>
  )
}
