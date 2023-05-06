import { Box, Button, Image, Text, Divider  } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Footer} from "../Pages/Footer"
import axios from 'axios'

export const SinglePage = () => {

    let {id} = useParams()

    let [count, setCount] = useState(0)

    let [data, setData] = useState([])
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


  return (
    <div style={{paddingTop:"120px", backgroundColor:"#F1ECED"}}>

        <Box  display={"flex"} w="80%" ml="200px" gap="50px">
            
            <Box w="50%">
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
                        <Button borderRadius={"50%"} background={"white"} border="1px solid black" _hover={{bg:"none"}} isDisabled={count==0} onClick={()=>handelCount(-1)}>-</Button>
                    </Box>
                    <Button mt="10px" ml="10px" borderRadius={"25px"} bg="#230E09" color="white">ADD TO CART</Button>
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

        <Box mt="200px">
            <Footer/>
        </Box>
       </Box>

    </div>
  )
}