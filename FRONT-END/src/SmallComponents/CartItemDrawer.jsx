import { Box, Button, Image, Text } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { AuthContext } from '../AuthContectProvider/AuthContextProvider'

export const CartItemDrawer = ({onClose}) => {

  let {isAuth, name} = useContext(AuthContext)

  let [cartItem, setCartItem] = useState([])

  let [total, setTotal] = useState(0)

  let [cartPage, setCartPage] = useState(false)

  let address = localStorage.getItem("Address")

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
   
  }
  

  return (
    <div>
      <Box>
        {
          cartItem.map((ele)=>(
            <Box padding="10px">
              <Box display={"flex"} gap="40px" justifyContent={"space-around"}>
             
             <Box >
             <Image w="80%" src={ele.image}></Image>
             </Box>
             
             <Box>
               <Text fontSize={"17px"} fontWeight={"bold"} noOfLines={1} >{ele.name}</Text>
               <br />
               <Text>$ {ele.price}</Text>
               
           </Box>

           <Button color="brown" onClick={() => handelDelete(ele.id)}>Delete</Button>
            
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

        <Box  mt="20px">
        
        
        {address ? (<><Link to={"/cart"}><Button ml="110px" borderRadius={"25px"} bg="white" border="1px solid black" color="black" _hover={{bg:"black", color:"white"}} onClick={handelPage}>VIEW CART</Button></Link>
        
        <Link to={"/checkout"}><Button ml="60px" borderRadius={"25px"} mt="10px" bg="red" color="white" _hover={{bg:"red", color:"white"}}>PROCEED TO CHECKOUT</Button></Link></>):( 
          
          <Box  mt="5px" mb="5px" fontWeight={"bold"} >
            Kindly Add Your Address to proceed
          </Box>
          
         )}
        </Box>
      </Box>
    </div>
  )
}
