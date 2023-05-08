import { Box, Button, Image, Text, Divider, Spinner,  useToast, useDisclosure  } from '@chakra-ui/react'
import React, {  useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Footer} from "../Pages/Footer"
import axios from 'axios'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react' 
  


export const SinglePage = () => {

    const toast = useToast()

    let {id} = useParams()

    const { isOpen, onOpen, onClose } = useDisclosure()
    
    let [cart, setCart] = useState([])

    let [count, setCount] = useState(1)

    let [data, setData] = useState({})
    let [load, setLoad] = useState(false)

  


    useEffect(()=>{
        setLoad(true)
        axios.get(`https://mock-chak.onrender.com/coffee/${id}`)
        .then((res)=>{
            setLoad(false)
            setData(res.data)
        })

    },[])


    let handelCount = (val)=>{
        
        setCount(count+val)
    }

    const addItemToCart = () => {
        const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || []
        const itemExists = existingCartItems.some((item) => item.id === data.id)
    
        if (!itemExists) {
          const cartItem = { ...data, quantity: count }
          const newCartItems = [...existingCartItems, cartItem]
          localStorage.setItem('cartItems', JSON.stringify(newCartItems))
          setCart(newCartItems)
          
          toast({
            title: 'Item Added To Cart',
            status: 'success',
            duration: 2000,
            position:"top-right",
            isClosable: true,
          })
        }
        else{
            toast({
                title: 'Item Already In Cart',
                status: 'error',
                duration: 2000,
                position:"top-right",
                isClosable: true,
              })
        }
      }
      const addItemTowishlist = () => {
        const existingCartItems = JSON.parse(localStorage.getItem('wishlistItem')) || []
        const itemExists = existingCartItems.some((item) => item.id === data.id)
    
        if (!itemExists) {
          const cartItem = { ...data, quantity: count }
          const newCartItems = [...existingCartItems, cartItem]
          localStorage.setItem('wishlistItem', JSON.stringify(newCartItems))
          setCart(newCartItems)
          
          toast({
            title: 'Item Added To Wish List',
            status: 'success',
            duration: 2000,
            position:"top-right",
            isClosable: true,
          })
        }
        else{
            toast({
                title: 'Item Already In Wish List',
                status: 'error',
                duration: 2000,
                position:"top-right",
                isClosable: true,
              })
        }
      }
      

  return (
    <div style={{paddingTop:"120px", backgroundColor:"#F1ECED"}}>

        <Box  display={"flex"} w="80%" ml="200px" gap="50px">
            
            <Box w="50%" position={"relative"}>
                <Image src={data.image}/>
                 
            </Box>

            <Box w="40%">
                <Text fontSize={"40px"} fontWeight={"bold"}>{data.name}</Text>
                <br />
                <Text fontWeight={"light"}>Model : {data.color}</Text>
                <br />
                <Text lineHeight={"8"}>{data.description}</Text>
                <br />
                <Text fontSize={"30px"} fontWeight={"bold"}>$ {data.price}</Text>

                <Box mt="50px" w="32%">
                    <Text mt="10px" textAlign={"center"} fontWeight={"light"}>QUANTITY</Text>
                    <Box mt="10px" display={"flex"} gap="30px">
                        <Button borderRadius={"50%"} background={"white"} border="1px solid black" _hover={{bg:"none"}} onClick={()=>handelCount(+1)}>+</Button>
                        <Text fontSize={"25px"}>{count}</Text>
                        <Button borderRadius={"50%"} background={"white"} border="1px solid black" _hover={{bg:"none"}} isDisabled={count==1} onClick={()=>handelCount(-1)}>-</Button>
                    </Box>
                    <Box display={"flex"} gap="5px" w="350px">
                    <Button mt="10px" padding="10px" ml="10px" borderRadius={"5px"} bg="#230E09" color="white" _hover={{bg:"black",color:"white"}} onClick={onOpen}>ADD TO CART</Button>
                    <Button mt="10px" padinng="10px" ml="10px" borderRadius={"5px"} bg="#230E09" color="white" _hover={{bg:"black",color:"white"}} onClick={addItemTowishlist}>ADD TO WISHLIST</Button>
                    </Box>
                    
                </Box>

            </Box>

        </Box>

        <Divider mt="20px"/>

       <Box mt="100px">
       <Box backgroundColor={"#230E09"} color="white" w="40%" m="auto">
            <Text textAlign={"center"} fontWeight={"extrabold"} fontSize={"40px"}>SHIPPING AND RETURNS</Text>
        </Box>

        <Box w="73%" m="auto" mt="100px">
            <Text fontWeight={"bold"}  fontSize={"30px"}>
            Shipping
            </Text> 
            <Text fontWeight={"medium"} mt="20px" fontSize={"20px"}>
            Orders are delivered within 5 working days except in cases of force majeure (for more details, please see the Terms of Sale) with a cost of €7 for orders below €59.90.
            </Text>
        </Box>

        <Box w="73%" m="auto" mt="100px">
            <Text fontWeight={"bold"}  fontSize={"30px"}>
            Returns
            </Text> 
            <Text fontWeight={"medium"} mt="20px" fontSize={"20px"}>
            You can return any purchased product within 14 days from the delivery date. If you want to arrange free collection of used electrical products, please click here.            </Text>
        </Box>

       </Box>
        <Box mt="200px">
            <Footer/>
        </Box>

        <Modal isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />
        <ModalContent maxW="40rem">
          <ModalHeader>Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody >
            <Box padding="30px" display={"flex"} gap="20px">
                <Box w="50%" >
                    <Image src={data.image}/>
                </Box>
                <Box textAlign={"center"}  w="50%" >
                    
                    <Text fontWeight={"bold"} fontSize={"30px"}>{data.name}</Text>
                    <br />
                    <Text fontWeight={"bold"} fontSize={"30px"}>$ {data.price}</Text>
                    <br />
                    <Text>QUANTITY : {count}</Text>

                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                    <Button colorScheme='red' borderRadius={"25px"} mr={3} onClick={onClose}>
              Continue Shopping
            </Button>
            <br />
            <br />
            <Button _hover={{bg:"#230E09", color:"white"}}  borderRadius={"25px"} bg="#230E09" color="white" onClick={addItemToCart}>ADD TO CART</Button>
                </Box>
            </Box>
          </ModalBody>

          <ModalFooter>
            
          </ModalFooter>
        </ModalContent>
      </Modal>

    </div>
  )
}
