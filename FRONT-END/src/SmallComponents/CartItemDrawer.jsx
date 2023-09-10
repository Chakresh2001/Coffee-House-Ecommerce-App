import { Box, Button, Image, Text, useToast } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { AuthContext } from '../AuthContectProvider/AuthContextProvider'

export const CartItemDrawer = ({onClose}) => {

  let {isAuth, name} = useContext(AuthContext)

  let [cartItem, setCartItem] = useState([])
  const toast = useToast()
  let [total, setTotal] = useState(0)

  let [cartPage, setCartPage] = useState(false)

  let [address, setAddress] = useState([])

  const [add, setAdd] = useState(0)

  const getData = ()=>{
    const token = JSON.parse(localStorage.getItem("token"))
    if(token){
      fetch("https://worrisome-bass-hosiery.cyclic.cloud/cart", {
        method : "GET",
        headers : {
          "Authorization": token,
          "Content-Type": "application/json"
        }
      })
      .then((res)=>res.json())
      .then((res)=>add = setCartItem(res.message))
      .catch((err)=>console.log(err))
    }
  }

  let check = ()=>{
    const token = JSON.parse(localStorage.getItem("token"))
    if(token){
      fetch("https://worrisome-bass-hosiery.cyclic.cloud/address",{
    method:"GET",
    headers :{
      "Authorization": token,
      "Content-Type": "application/json"
    },
  })
  .then((res)=>res.json())
  .then((res)=>{
    console.log(res)
    setAdd(res.message.length)
    setAddress(res.message)
    console.log(res.message)
  })
  .catch((err)=>console.log(err))
    }
  }

  useEffect(()=>{
    getData()
    const token = JSON.parse(localStorage.getItem("token"))
    if(token){
      fetch("https://worrisome-bass-hosiery.cyclic.cloud/address",{
    method:"GET",
    headers :{
      "Authorization": token,
      "Content-Type": "application/json"
    },
  })
  .then((res)=>res.json())
  .then((res)=>{
    console.log(res)
    setAdd(res.message.length)
    setAddress(res.message)
  })
  .catch((err)=>console.log(err))
    }
  },[isAuth])

  useEffect(() => {
    let val = 0
    cartItem.forEach((ele) => {
      val += ele.price * ele.quantity
    })
    setTotal(val)
  }, [cartItem])

  let handelDelete = (id) => {
    const token = JSON.parse(localStorage.getItem("token"))
    if(token){
      fetch(`https://worrisome-bass-hosiery.cyclic.cloud/cart/${id}`, {
        method : "DELETE",
        headers : {
          "Authorization": token,
          "Content-Type": "application/json"
        }
      })
      .then((res)=>res.json())
      .then((res)=>{
        toast({
          title: 'Item Removed From Cart',
          status: 'error',
          duration: 2000,
          position:"top-right",
          isClosable: true,
        })
        getData()
        check()
      })
      .catch((err)=>console.log(err))
    }
  }
  
  let handelPage = ()=>{
    setCartPage(true)
  }
  if(cartPage){
    onClose()
    
  }
  console.log(add)

  return (
    <div>
      <Box>
        {
          cartItem.length > 0 && cartItem.map((ele)=>(
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

           <Button color="brown" onClick={() => handelDelete(ele._id)}>Delete</Button>
            
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
        
        
        {add>=1? (<><Link to={"/cart"}><Button ml="110px" borderRadius={"25px"} bg="white" border="1px solid black" color="black" _hover={{bg:"black", color:"white"}} onClick={handelPage}>VIEW CART</Button></Link>
        
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
