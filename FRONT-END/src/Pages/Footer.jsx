import { Box, Image, Input, Text, Button, Checkbox, Flex } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import {  ChevronRightIcon } from '@chakra-ui/icons'
import React, { useState } from 'react'

export const Footer = () => {

    let [mail, setMail] = useState("")

    let [dis, setDis] = useState(true)
    const toast = useToast()

    let handelChange = (e)=>{
        setDis(false)
        setMail(e.target.value)
    }
    let handelClick=()=>{
        toast({
            title: 'THANK YOU',
            description: "You've succesfully suscribed to our Newsletter",
            status: 'success',
            duration: 2000,
            isClosable: true,
          })
    }

  return (
    <div>
        
        
        <Box bg="#f9f8f9" display={"flex"} justifyContent={"space-evenly"}  >
            <Box ml="50px" w="50%">
            <Image w="100%" src="https://cdn.discordapp.com/attachments/1066037876090998894/1103219794364354580/bialetti-vector-logo_clear.png"  width={"20%"}/>
            </Box>
            <Box mr="230px" display={"flex"} justifyContent={"space-between"} width="30%" alignItems={"center"}>
                <Box>
                    <Text>FREE DELIVERY</Text>
                    <p>for orders over 59,90€</p>
                </Box>
                <Box>
                    <Text>PAYMENT SECURITY</Text>
                    <p>via PayPal</p>
                </Box>
                <Box>
                    <Text>FREE RETURNS</Text>
                    <p>within 14 days</p>
                </Box>
            </Box>
        </Box>

        <Box display="flex" gap="20px">
        <Box padding="40px" color="black" width="50%">
            <p>Sign up for our newsletter</p>
            <Text fontWeight={"bold"} fontSize={"20px"}> YOU WILL RECIEVE AN IMMEDIATE 10% </Text>
            <Text fontWeight={"bold"} fontSize={"20px"}>DISCOUNT ON YOUR FIRST ORDER</Text>

            <Box mt="50px" width={"40%"} display={"flex"}>
            <Input type="email" placeholder='name@email.com' borderRadius={"none"} value={mail} onChange={handelChange}/>
            <Button isDisabled={dis} bg="black" color="white" w="105px" _hover={{bg:"black"}} borderRadius={"none"} onClick={handelClick}>Submit <ChevronRightIcon/> </Button>
            </Box>
            <Box mt="15px">
            <Checkbox mt="5px" /> I agree that my personal data is stored and processed according to the privacy policy

            </Box>
            <Flex mt="50px" gap="20px">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </Flex>

            <Flex mt="50px" justifyContent={"space-evenly"}>
            <Text>ABOUT US</Text>
            <Text>OUR HISTORY</Text>
            <Text>CAREERS</Text>
            <Text>INVESTOR RELATIONS</Text>
            </Flex>

        </Box>

       <Box>
       <Flex padding="50px" gap="40px">
            <Box>
            <Text fontWeight={"bold"} fontSize={"20px"}>LEGAL</Text>
            <p style={{marginTop:"10px"}}>Cookies</p>
            <p>Privacy Policy</p>
            <p>Terms and conditions</p>
            <p>Selling conditions</p>
            <p>Regulations</p>
            <p>B2B</p>
            <p>Coffee Card</p>
            <p>Qualtiy</p>
            </Box>
            <Box>
                <Text fontWeight={"bold"} fontSize={"20px"}>SUPPORT</Text>
                <p style={{marginTop:"10px"}}>Faq</p>
                <p>Dispute resolution</p>
                <p>Payment methods</p>
                <p>Delivery times</p>
            </Box>
            <Box>
                <Text fontWeight={"bold"} fontSize={"20px"}>ADRESS</Text>
                <p style={{marginTop:"10px"}}>Registered Office</p>
                <p>Via Fogliano, 1</p>
                <p>25030 Concaligao BS</p>
                <p>Italia</p>
            </Box>
        </Flex>
        <Box ml="50px" display={"flex"} gap="40px">
        <Button borderRadius={"none"} border="1px solid black" bg="white"  width="200px" height="60px">CONTACT US</Button>
        <Button borderRadius={"none"} border="1px solid black" bg="white"  width="200px" height="60px">SERVICE CENTER</Button>
        </Box>
       </Box>
        
        
        

       
        </Box>
        

        
    </div>
  )
}
