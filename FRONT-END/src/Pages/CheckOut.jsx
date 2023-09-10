import { Box, Button, Center, FormControl, Input, InputGroup, InputLeftAddon, Spinner, Stack, Text, useDisclosure, useToast } from '@chakra-ui/react';
import React, { useState, useEffect, useContext } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContectProvider/AuthContextProvider';

export const Checkout = () => {
  let [addressdetails, setAddressDetails] = useState([])
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  let navigate = useNavigate()
  let {isAuth} = useContext(AuthContext)
  let [details, setDetails] = useState([])


  
  useEffect(()=>{
    const token = JSON.parse(localStorage.getItem("token"))
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
    setAddressDetails(res.message[0])
  })
  .catch((err)=>console.log(err))
    
  },[])

  useEffect(()=>{
    setDetails(addressdetails)
  },[details])

  

  if(isOpen){
    setTimeout(() => {
      onClose();
      navigate('/');
    }, 3000);

  }

  useEffect(() => {
    if(name && cardNumber && cvv && expiryDate){
      setIsDisabled(false)
    }
    else{
      setIsDisabled(true)
    }
  }, [name, cardNumber, cvv, expiryDate]);

  return (
    <div>
      

      <Box>


     
          <>
          
          <Box  w="40%" display={"flex"}  flexDirection={"column"} m="auto" mt="80px" padding="20px" boxShadow={"lg"}>
        <Text textAlign={"center"} fontSize={"20px"} fontWeight={"bold"}>PAYMENT</Text>
            <br />
            
                <form>
                    <FormControl>
                      <Stack spacing={4}>
                    <Box>
                    <label style={{fontWeight:"bold"}}>Name On Card</label>
                      <Input type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
             mt="5px" placeholder='Name On Card'/> 
                    </Box>

                    <Box>
                <label style={{fontWeight:"bold"}}>Card Number</label>
                <Input type="number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
             mt="5px" placeholder={"Card Number"}/>
            </Box>                  
            <Box>
                <label style={{fontWeight:"bold"}}>Expiry Date</label>
                <Input type={"date"}
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
             mt="5px" placeholder='Expiry Date' />
            </Box>                  
            <Box>
                <label style={{fontWeight:"bold"}}>CVV</label>
                <Input type="password"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
             mt="5px" placeholder='CVV'/>
            </Box>                  
                  <br />
                  <Button onClick={onOpen} colorScheme={"green"} className="submitBtn" isDisabled={isDisabled}>
							    Submit
						      </Button>
                      </Stack>
                    </FormControl>
                  </form>
                  


        </Box>

<>

<Box  padding="20px" mt="30px" w="50%" fontSize={"20px"} fontWeight={"bold"} boxShadow={"dark-lg"} mx={"auto"}>

  <Text textAlign={"center"} color="red.600">Delivery Address</Text>
        
        <Stack
      direction="column"
      alignItems="center"
      justifyContent="space-between"
      boxShadow="lg"
      padding="20px"
      spacing={4}
      bg="gray.50"
      borderRadius="10px"
      
    >
      
       <>
        
        <Text>{`House No :-  ${addressdetails.HouseNo}`}</Text>
      <Text>{`Tower No :- ${addressdetails.TowerNo}`}</Text>
      <Text>{`Buliding :-  ${addressdetails.Building}`}</Text>
      <Text>{`Address :-  ${addressdetails.Address}`}</Text>
      <Text>{`Landmark :-  ${addressdetails.Landmark}`}</Text>
      <Text>{`Phone No :- ${addressdetails.phoneNo}`}</Text>

        </>
      
      
    </Stack>
                
        </Box>  
            
            </>
          


        <Box>
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>PAYMENT DETAILS</ModalHeader>
        
          <ModalBody>
            <Text fontWeight={"extrabold"} fontSize={"30px"} color="brown">
                THANK YOU FOR SHOPPING WITH US ☕
            </Text>
            <Text>
                Redirecting to Home Page <Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/>
            </Text>
          </ModalBody>

        </ModalContent>
      </Modal>

        </Box>
          
          </>
      

      </Box>

    </div>
  );
};
