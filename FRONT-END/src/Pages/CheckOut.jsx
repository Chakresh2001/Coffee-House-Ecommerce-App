import { Box, Button, Input, Spinner, Text, useDisclosure, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'




import { Navigate, useNavigate } from 'react-router-dom';

export const Checkout = () => {
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [name, setName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    let [dis, setDis] = useState(false)
    let navigate = useNavigate()
  
    const isDisabled = !name.trim() || !cardNumber.trim() || !expiryDate || !cvv.trim() || dis;
  
    function handlePayNow() {
      if (isDisabled) {
        toast({
          title: 'PLEASE FILL THE REQUIRED INPUT',
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      } else {
        setDis(true);
        setTimeout(() => {
          onClose();
          navigate('/');
        }, 2000);
      }
    }

    
  return (
    <div>
      <Box  w="40%" display={"flex"}  flexDirection={"column"} m="auto" mt="80px" padding="20px" boxShadow={"lg"}>
        <Text textAlign={"center"} fontSize={"20px"} fontWeight={"bold"}>Check Out</Text>
            <br />
            <Box>
                <label style={{fontWeight:"bold"}}>Name On Card</label>
                <Input type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            isRequired mt="5px" placeholder='Name On Card'/>
            </Box>
            <br />
            <Box>
                <label style={{fontWeight:"bold"}}>Card Number</label>
                <Input type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            isRequired mt="5px" placeholder={"Card Number"}/>
            </Box>
            <br />
            <Box>
                <label style={{fontWeight:"bold"}}>Expiry Date</label>
                <Input type={"date"}
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            isRequired mt="5px" placeholder='Expiry Date' />
            </Box>
            <br />
            <Box>
                <label style={{fontWeight:"bold"}}>CVV</label>
                <Input type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            isRequired mt="5px" placeholder='CVV'/>
            </Box>
            <br />
            <Box m="auto">
                <Button bg="red" onClick={onOpen} color="white" _hover={{bg:'black', color:"white"}} isDisabled={dis}>PAY NOW</Button>
            </Box>
        </Box>


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
                Redirecting to Home Page <Spinner/>
            </Text>
          </ModalBody>

        </ModalContent>
      </Modal>

        </Box>

    </div>
  );
};
