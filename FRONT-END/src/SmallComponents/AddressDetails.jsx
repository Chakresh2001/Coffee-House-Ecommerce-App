import { Box, Stack, Text, Button } from '@chakra-ui/react'
import React from 'react'

export const AddressDetails = ({handelDelete,_id,id,HouseNo,TowerNo,Building,Address,Landmark,phoneNo}) => {

  return (
    <div>
        <Box  fontSize={"20px"} fontWeight={"bold"} >
        
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
      <Text>{`Address :-  ${id}`}</Text>
      <Text>{`House No :-  ${HouseNo}`}</Text>
      <Text>{`Tower No :- ${TowerNo}`}</Text>
      <Text>{`Buliding :-  ${Building}`}</Text>
      <Text>{`Address :-  ${Address}`}</Text>
      <Text>{`Landmark :-  ${Landmark}`}</Text>
      <Text>{`Phone No :- ${phoneNo}`}</Text>
      <Button w="25%" onClick={() => handelDelete(_id)} bg={"red"} color={"white"}>
        Delete
      </Button>
    </Stack>
                
        </Box>  
    </div>
  )
}
