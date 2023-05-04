import { Image, Box, Text, Avatar } from '@chakra-ui/react'
import React from 'react'
import {Footer} from "./Footer"

export const News = () => {
  return (
    <div>
        <Box>

            <Box mt="80px" width="100%" display={"flex"} justifyContent={"space-around"} >

                <Box  display={"flex"} flexDirection={"column"} justifyContent={"flex-end"} color="white" w="70%" backgroundImage="https://images.unsplash.com/photo-1572119243889-4939ec2ced2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fG1va2ElMjBwb3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" backgroundRepeat={"no-repeat"} backgroundSize={"cover"} backgroundPosition={"center"}>
               
                    <Box ml="50px" mb="50px">
                    <h1 style={{fontWeight:"bold", fontSize:"70px"}}>INSPIRATION</h1>
                    <p style={{fontSize:"20px"}}>LIVE THE COFFEE EXPERIECNCE AT 360 DEGREE</p>
                    </Box>
               </Box>

                <Box width={"20%"}>
                    <Box fontSize={"small"}>
                        <p>A Moka pot on induction hob</p>
                        <p>when tradition is renewed</p>
                        <Image heigth="100px" src="https://images.unsplash.com/photo-1593369196682-6d8ec9ff3ae0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fG1va2ElMjBwb3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>

                    </Box>

                    <Box fontSize={"small"} mt="10px">
                        <p>Welcome the party. The new</p>
                        <p>Deco Glamour Collection</p>
                        <Image heigth="100px" src="https://www.bialetti.com/media/catalog/product/cache/e8aa104d064dcf81ed9afb1c9c6893f4/_/0/_0022_0004979.jpg"/>
                    </Box>
                </Box>
                


            </Box>


           <Box display={"flex"} justifyContent={"center"}>
           <Box width="60%" mt="100px" >

            <Box textAlign={"center"} fontWeight={"bold"} fontSize={"40px"}>
                <Text>STARTING THE DAY WITH A COFFEE</Text>
                <Text>AN ITALIAN RITUAL UNIQUE IN FLAVOR</Text>
            </Box>
            <Box mt="50px" display={"flex"}justifyContent={"flex-end"}>
                        <Box display={"flex"} gap="30px">
                            <Box>
                            <p>A tasty custom and a bonefide</p>
                            <p>ritual Starting the day with a coffee, as</p>
                            <p>part of a healthy and balanced breakfast</p>
                            <p>is good (on multiple levels)</p>
                            <p style={{fontWeight:"bolder", marginTop:"30px"}} >Read More</p>
                            </Box> 
                            <Box>

                    <Avatar size='xl' src="https://www.bialetti.com/media/catalog/product/cache/e8aa104d064dcf81ed9afb1c9c6893f4/b/0/b0000an3qi_pt01.jpg"/>
                            </Box>
                </Box>
            </Box>
    


            </Box>

           </Box>


           <Box ml="20px" gap="20px" mt="80px" display={"flex"} justifyContent={"space-between"}>

                <Box padding="15px" bg="#F0EFEE" w="33%" textAlign={"center"}>
                    <p>New Moka's Here is what to do to get</p>
                    <p>off to a good start</p>
                    <Image src="https://www.bialetti.com/media/catalog/product/cache/e8aa104d064dcf81ed9afb1c9c6893f4/m/o/moka_express.png"/>
                </Box>
                <Box padding="15px"  bg="#F9F6F4" w="33%" textAlign={"center"}>
                    <p>How to remove limescale from a</p>
                    <p>Moka for state of the art coffee</p>
                    <Image src="https://www.bialetti.com/media/catalog/product/cache/e8aa104d064dcf81ed9afb1c9c6893f4/v/e/venus_frontale_da_6.png"/>
                </Box>
                <Box padding="15px" bg="#F0EFEE" mr="20px" w="33%" textAlign={"center"}>
                    <p>The Giola of an authentic Bialetti espresso</p>
                    <p>Discover the Bialetti espresso system</p>
                    <Image src="https://www.bialetti.com/media/catalog/product/cache/e8aa104d064dcf81ed9afb1c9c6893f4/0/1/012900100_sc_01_1.png"/>
                </Box>
                


           </Box>

           <Box mt="80px" display={"flex"} justifyContent={"center"} gap="30px" alignItems={"center"}>


            <Box width={"40%"}>
            <Box>
                <Image height={"400px"} width="100%" src="https://images.unsplash.com/photo-1603387008808-d96b9631ed73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmlhbGV0dGl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
            </Box>
            </Box>
            <Box>
                <h1  style={{fontWeight:"bold", fontSize:"20px"}}>HOW THE MOKA WORKS</h1>
                <h1 style={{fontWeight:"bold" , fontSize:"20px"}} >LIFT THE LID AND DISCOVER</h1>
                <h1 style={{fontWeight:"bold" , fontSize:"20px"}} >ALL ITS SECRETS</h1>
                <p>Understand how the moka works in a </p>
                <p>jouney of discovery for a unique object</p>
                <p>But also of an Italian ritual, that of coffee</p>
                <p>that has no time or borders</p>
                <p style={{fontWeight:"bolder", marginTop:"30px"}} >Read More</p>
            </Box>


           </Box>


            <Box mt="100px">
                <Footer/>
            </Box>


        </Box>
    </div>
  )
}
