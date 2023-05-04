import { Box, Text, Image, Button, Flex, Center, Avatar } from '@chakra-ui/react'
import React from 'react'
import { Footer } from "./Footer"

export const About = () => {
  return (
    <div>
        
            <Box display={"flex"} justifyContent={"space-between"} mt="100px">


                <Box paddingLeft={"30px"} paddingTop="30px" ml="200px"  width="20%">
                    <Text fontWeight={"bold"} fontSize={"40px"}>Special offers</Text>
                    <p style={{fontWeight:"light", fontSize:"15px"}}>Starting the day with a coffee</p>
                    <p style={{fontWeight:"light", fontSize:"15px"}}>an italian ritual unique in flavor</p>
                   
                </Box>
                    
               
                
                <Box display={"flex"} width={"70%"} justifyContent={"space-evenly"}>
                <Box w="15%" bg="#F8F8F8">
                    <Image src="https://www.bialetti.com/media/catalog/product/cache/e8aa104d064dcf81ed9afb1c9c6893f4/m/o/moka_rossa_3tz.png"/>
                    <Box display={"flex"} justifyContent={"space-between"}>
                    <Text fontWeight={"light"} >MOKA INDUCTION </Text>
                    <Text fontWeight={"light"}>54.90$</Text>
                    </Box>
                </Box>

                <Box width="15%" bg="#F8F8F8">
                    <Image src="https://www.coffeedesk.com/media/73/92/cc/1675900617/00afb6ce1a202db8c8ac8fc8fbccbd2d.jpg"/>
                    <Box display={"flex"} justifyContent={"space-between"}>
                        <Text fontWeight={"light"}>BIALETTI BICCHIERINI</Text>
                        <Text fontWeight={"light"}>33.90$</Text>
                    </Box>
                </Box>

                <Box w="15%" bg="#F8F8F8" >
                    <Image src="https://www.bialetti.com/media/catalog/product/cache/e8aa104d064dcf81ed9afb1c9c6893f4/0/0/0001807_01_1_1.png"/>
                    <Box display={"flex"} justifyContent={"space-between"}>
                        <Text fontWeight={"light"}>MILK PITCHER</Text>
                        <Text fontWeight={"light"}>12.99$</Text>
                    </Box>
                </Box>
                </Box>

            </Box>


            <Box display="flex" gap="20px" width={"30%"}>

                <Box padding="20px" bg="#F8F8F8">
                    <Image src="https://www.bialetti.com/media/catalog/product/cache/e8aa104d064dcf81ed9afb1c9c6893f4/n/o/nocciola_1.png"/>
                    <Box display={"flex"} justifyContent={"space-around"}>
                        <p>DELICATO</p>
                        <p>7$</p>
                    </Box>
                </Box>
                <Box padding="20px" bg="#F8F8F8">
                    <Image src="https://www.bialetti.com/media/catalog/product/cache/e8aa104d064dcf81ed9afb1c9c6893f4/l/i/linea-preziosa.png"/>
                    <Box display={"flex"} justifyContent={"space-around"}>
                        <p>COFFEE PRESS</p>
                        <p>20.30$</p>
                    </Box>
                </Box>

            </Box>

           <Box mt="80px" ml="230px">
           <Text fontSize={"30px"} fontWeight={"bold"} >A story </Text>
           <Text fontSize={"30px"} fontWeight={"bold"}>written together</Text>
           </Box>
           <Flex mt="50px" justifyContent={"center"}> 
           <Box width="70%"display={"flex"} justifyContent="space-between">

<Box width="30%"  >
    <Image  src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/bialetti-moka-old-patent-denny-h.jpg"/>
</Box>

<Box>
    <p>FOR OVER 90 YEARS, BIALETTI HAS</p>
    <p>REPRESENTED THE TASTE OF SHARED</p>
    <p>MOMENTS</p>
    <br />
    <p>In Italy, where the kitchen is the heart of the home</p>
    <p>and where coffee is a passion that brings friends and </p>
    <p>family together, Bialetti is found in nine out of ten</p>
    <p>households</p>
    <br />
    <br />
    <Button borderRadius={"none"} bg="black" color="white" _hover={{bg:"black"}}>FIND OUT MORE </Button>
</Box>

<Box width="20%">
    <Image width="100%" src="https://www.hfndigital.com/wp-content/uploads/sites/14/2016/02/168325-renato-bialetti.jpg"/>
</Box>


</Box>

           </Flex>

           <Box alignItems={"center"} height={"300px"} mt="200px" bg="#F8F8F8" display={"flex"} justifyContent={"center"}>
           
           <Box>
            <Text fontWeight={"bold"} fontSize={"40px"}>A TASTE FOR</Text >
            <Text fontWeight={"bold"} fontSize={"40px"}>QUALITY</Text >
           
            <p>Bialetti offers a 5-year warranty on </p>
            <p>expresso machines</p>
            <br />
            <Button borderRadius={"none"} bg="black" color="white" _hover={{bg:"black"}}>FIND OUT MORE </Button>
           </Box>

           <Box width="12%">
            <Image src="https://www.bialetti.com/media/catalog/product/cache/e8aa104d064dcf81ed9afb1c9c6893f4/0/1/012900010sc_01.png"/>
           </Box>
            
           </Box>

           <Box mt="200px" w="80%" display="flex" justifyContent={"space-between"}>
                <Box>
                    <Text  fontWeight={"bold"} fontSize={"40px"}>USE YOUR</Text>
                    <Text  fontWeight={"bold"} fontSize={"40px"}>BIALETTI</Text>
                    <Text  fontWeight={"bold"} fontSize={"40px"}>COUPON</Text>
                    
                </Box>
                <Box width="31%">
                    <Box ml="100px">
                    <Text fontWeight={"bold"}>IT'S EASY, SIMPLY FOLLOW THESE</Text>
                    <Text fontWeight={"bold"}>INSTRUCTIONS</Text>
                    <br />
                    <Text  fontWeight={"light"} >Enjoy all the flavor of a coffee prepared with the </Text >
                    <Text  fontWeight={"light"}>Bialetti Espresso System</Text >
                    <br />
                    <Text  fontWeight={"light"}>Find out now how to recieve a complimentary pack of </Text >
                    <Text fontWeight={"light"} >80 Bialetti coffe capsules</Text >
                    <br />
                    <Button borderRadius={"none"} bg="black" color="white" _hover={{bg:"black"}}>FIND OUT MORE </Button>
                    </Box>
                    <Image mt="50px" width="100%" src="https://www.bialetti.com/media/catalog/product/cache/e8aa104d064dcf81ed9afb1c9c6893f4/0/9/096080255_m_01_1.png"/>
                </Box>
                <Box>
                    <Image width="90%" src="https://images.unsplash.com/photo-1598524860521-e5740fd893ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmlhbGV0dGl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
                </Box>
           </Box>

        <Box _hover={{cursor:"pointer"}} mt="100px">
            <Footer/>
        </Box>

            
        
    </div>
  )
}
// fontWeight={"bold"} fontSize={"20px"