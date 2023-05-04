import React from 'react'
import { Navbar } from '../HomeComponent/Navbar'
import { Box, Flex, Text, Image, Button, useDisclosure } from '@chakra-ui/react'
import { Footer } from './Footer'
import { SearchIcon, ChevronRightIcon } from '@chakra-ui/icons'


export const Home = () => {

    
    
  return (
    <div>
        
        <Box>
            
            <Box display="flex" justifyContent={"center"} mt="100px">
                    <Image  src="https://media.istockphoto.com/id/1312691986/photo/coffee-stuff-a-white-cup-with-black-coffee-italian-coffee-maker-moka-a-mill-and-grains-over-a.jpg?s=612x612&w=0&k=20&c=MwbyZQokRo_jd_ciOJeffIT1PcPKtCzc-DCMsvtKvAg=" width="50%"/>
                    
                </Box>
                <Box verticalAlign={"middle"} textAlign={"center"}mt="10px" fontWeight={"bold"} lineHeight={"30px"} fontSize={"25px"}>
                    <Text >THE REAL ITALIAN COFFEE EXPERIENCE,</Text>
                    <Text>NOW SUITABLE FOR INCUDTION</Text>
                    </Box>
                    
                    <Box  display="flex" justifyContent={"center"}mt="30px" >

                    <Button bg="black" color="white" borderRadius={"none"}>FIND OUT MORE <ChevronRightIcon/> </Button>
                    </Box>

        </Box >
                
                <Box display="flex" justifyContent={"center"} mt="200px" gap="20px">
                <Box bg="#f8f6f5" width="30%" height={"50%"}>
                    <Image src="https://www.bialetti.com/media/catalog/product/cache/e8aa104d064dcf81ed9afb1c9c6893f4/d/e/delicato_frontale.png"/>
                    <Box padding={"10px"} display="flex" justifyContent="space-between">
                    <Text>COFFEE BEANS - DELICATO</Text>
                    <Text>8.99$</Text>
                    </Box>
                </Box>
                <Box width="30%" height={"50%"} bg="#f8f6f5">
                    <Image src="https://www.bialetti.com/media/catalog/product/cache/e8aa104d064dcf81ed9afb1c9c6893f4/c/i/cioccolato_2.png"/>
                    <Box  padding={"10px"} display="flex" justifyContent="space-between">
                    <Text>GROUND COFFEE - CIOCCOLATO</Text>
                    <Text>5.33$</Text>
                    </Box>
                </Box>
                </Box>
                <Box display="flex" justifyContent={"end"}>
                    <Text fontWeight={"bold"} fontSize={"10px"}>VIEW ALL</Text>
                </Box>


                <Box mt="50px" display={"flex"} justifyContent={"center"}>
                    <Box>
                        <Box  display={"flex"} gap="30px" alignItems={"center"}>
                        <Text textAlign={"left"} fontWeight={"bold"} fontSize={"60px"}>THE ESSENCE
                        
                        </Text>
                        <Box mt="30px" fontWeight={"bold"} ml="50px" fontSize={"20px"}>
                        <p>DISCOVER</p>
                        <p> THE BIALETI</p>
                        <p>EXPERIENCE</p>
                        </Box>

                        </Box>
                    
                    
                    <Text textAlign={"center"} fontWeight={"bold"} fontSize={"60px"}>OF ITALIAN COFFEE</Text>
                    <Box display={"flex"} gap="30px" alignItems={"center"} justifyContent={"flex-end"}>
                    <Text mb="50px" color="#c33215" fontWeight={"extrabold"} fontSize={"30px"}>SINCE 1919</Text>
                    <Text textAlign={"right"} fontWeight={"bold"} fontSize={"60px"}>CULTURE</Text>
                    </Box>
                    </Box>
                </Box>


                <Box mt="80px">

                    <Flex  padding={"30px"} gap="30px">
                        <Box width="35%">
                        <Image src="https://www.bialetti.com/media/catalog/product/cache/e8aa104d064dcf81ed9afb1c9c6893f4/m/o/moka-express-mousehover.jpg" />
                        </Box>
                        <Box>
                        <Text fontWeight={"bold"} fontSize={"60px"}>Moka Express</Text>
                        <br />
                        <p style={{fontWeight:"bold"}}>SINCE 1933, THE COFFEE POT</p>
                        <p style={{fontWeight:"bold"}}> THAT BRINGS US TOGETHER  </p>
                        <br />
                        <p>Alfonso Bialetti is the inventor of the Moks</p>
                        <p>The year was 1933. This is how an iconic</p>
                        <p>product was born, one of the "Made in Italy"</p>
                        <p>symbols recognized around the world</p>
                        <br />
                        <br />
                        <Button width={"50%"} height={"50px"}  bg="black" color="white" borderRadius={"none"}>FIND OUT MORE <ChevronRightIcon/> </Button>

                        </Box>
                    </Flex>


                </Box>

                <Box w="90%" margin={"auto"} display="flex" justifyContent={"flex-end"}>
                    <Box width="40%" >
                    <Image src="https://www.bialetti.com/media/catalog/product/cache/e8aa104d064dcf81ed9afb1c9c6893f4/e/s/esperto-grani-top-view-ambientata_quadrata.jpg" w="100%" height={"500px"}/>
                    <Text fontWeight={"bold"} fontSize={"50px"}>Perfetto Moka</Text>
<br />
<p>THE BIALETTI GROUND COFFEE</p>
<p>FOR MOKA LOVERS</p>
<br />
<br />
<p>Thanks to the choice of the best raw ingrediants</p>
<p>perfect blending and careful roasting. Bialetti</p>
<p>ground coffe guarntees a perfect combination of </p>
<p>flavors and aromas to be enoyed with a moka pot</p>
<br />
    <br />
    <Button width={"40%"} height={"50px"}  bg="black" color="white" borderRadius={"none"}>FIND OUT MORE <ChevronRightIcon/> </Button>

                    </Box>
                </Box>
                <Box display={"flex"} justifyContent={"center"} mt="50px" gap="20px">
                    
                

                <Box bg="#f8f6f5" width={"40%"} >

                    <Box>
                    <Text fontWeight={"bold"} fontSize={"25px"}>Bialetti Espresso System</Text>
                        <br />
                        <p>OUR ENTIRE HISTORY EMBODIED IN</p>
                        <p>AN ESPRESSO</p>
                        <br />
                        <br />
                        <p>The best expresso in one which is also</p>
                        <p>good for the planet</p>
                    </Box>

                    <Box display={"flex"} justifyContent={"flex-end"}>
                    <Image mt="0px" src = "https://www.bialetti.com/media/catalog/product/cache/e8aa104d064dcf81ed9afb1c9c6893f4/s/u/super_laterale_panna.png" width="80%"/>

                    </Box>
                    </Box>

                    <Box width={"40%"} >
                    <Box filter='auto' brightness='60%' position={"absolute"}>
                        <Image src="https://images.unsplash.com/photo-1544486864-3087e2e20d91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNvZmZlZSUyMHJvYXN0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"  width="550px" height={"678px"}/>"
                    </Box> 
                    <Box position={"relative"} top="0" padding="20px" color="white">
                    <Text fontWeight={"bold"} fontSize={"40px"}>Bialetti Coffee Roasting</Text>
                    <br />
                    <p>A PASSION BORN FROM OVER 100 YEARS OF</p>
                    <p>EXPERIENCE IN THE COFFEE WORLD</p>
                    <br />
                    <br />
                    <p>EveryDay we select the best beans, to offer you a </p>
                    <p>coffee with unmistakenable aroma and taste</p> 
                    </Box>
                </Box>
               
                </Box>

                <Box mt="100px">
                <Footer/>
                </Box>


                
                

                
        

    </div>
  )
}

