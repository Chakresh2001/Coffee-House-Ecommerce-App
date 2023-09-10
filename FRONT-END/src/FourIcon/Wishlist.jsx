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
import { AuthContext } from '../AuthContectProvider/AuthContextProvider'
import axios from 'axios'




export const Wishlist = () => {

  let {isAuth} = useContext(AuthContext)
  const toast = useToast()

  let [wishItem, setwishItem] = useState([])

  const getData = ()=>{
    const token = JSON.parse(localStorage.getItem("token"))
    fetch("https://worrisome-bass-hosiery.cyclic.cloud/wish", {
        method : "GET",
        headers : {
          "Authorization": token,
          "Content-Type": "application/json"
        }
      })
      .then((res)=>res.json())
      .then((res)=>setwishItem(res.message))
      .catch((err)=>console.log(err))
  }
  useEffect(()=>{
    getData()
  },[])
  let handelDelete = (id) => {
    const token = JSON.parse(localStorage.getItem("token"))
    fetch(`https://worrisome-bass-hosiery.cyclic.cloud/wish/${id}`, {
        method : "DELETE",
        headers : {
          "Authorization": token,
          "Content-Type": "application/json"
        }
      })
      .then((res)=>res.json())
      .then((res)=>{
        toast({
          title: 'Item Removed From WishList',
          status: 'error',
          duration: 2000,
          position:"top-right",
          isClosable: true,
        })
        getData()
      })
      .catch((err)=>console.log(err))
  }
  return (
    <div>
        {
          isAuth ? (
            <Box bg="#F0ECEC">
      <Box >
        <Box padding="40px"><Text fontSize={"40px"} fontWeight={"bold"}>Wish List Cart ❤️</Text></Box>

       {
        wishItem.length > 0 ? (
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
      {wishItem.map((ele) => (
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
          <Td color="brown" onClick={() => handelDelete(ele._id)} _hover={{cursor:"pointer"}}>Delete</Td>
        </Tr>
      ))}
    </Tbody>
    <Tfoot>
      <Tr>
        <Th></Th>
        <Th></Th>
        <Th>Total</Th>
        <Th isNumeric>${wishItem.reduce((acc, ele) => acc + ele.price * ele.quantity, 0).toFixed(2)}</Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
</Box>
        ) : (
          <Text fontSize={"34px"} textAlign={"center"} fontWeight={"bold"}>No Items In Wish List</Text>
        )
       }
</Box>
</Box>
          ) : (
            <Text textAlign={"center"} fontWeight={"bold"} fontSize={"40px"} mt="150px">PLEASE LOG IN TO SEE THE WISHLIST PAGE</Text>
          )
        }
    </div>
  )
}
