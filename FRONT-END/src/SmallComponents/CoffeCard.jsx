import React from 'react'
import { Box, Image, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const CoffeCard = ({id,image,price,name}) => {
  return (
    <div >

        <Box key={id}>
        
        <Box padding="30px" bg="white" borderTopRightRadius={"25px"} w="80%" borderBottomLeftRadius={"25px"} overflow={"hidden"} >
            <Link to={`/coffee/${id}`}><Image transition={"transform .4s"} _hover={{transform: "scale(1.2)", cursor:"pointer"}} src={image}/></Link>
        </Box>

            <Box ml="5px">
                {/* name */}
            <Text mt="5px" fontWeight={"medium"} fontSize={"17px"}>{name}</Text> 
            
            {/* price */}
            <Text mt="5px">$ {price}</Text>

            

                <Link to={`/coffee/${id}`}>
                    <Box mt="5px" display={"flex"} gap="10px" fontSize={"14px"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-bag"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                    View Product
                    </Box>
                </Link>
            
           
            {/* <Link to={`/coffee/${id}`}>
            </Link> */}

            </Box>

        </Box>

    </div>
  )
}
