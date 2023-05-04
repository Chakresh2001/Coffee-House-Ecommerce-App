import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  Button,
  Center
} from '@chakra-ui/react';

export const CartDrawer = ({ isOpen, onClose, onModalOpen }) => {
  return (
    <div>
       <Drawer isOpen={isOpen} placement="right" onClose={onClose} data-cy="chakra-drawer">

    

<DrawerContent>
  <DrawerCloseButton></DrawerCloseButton>
  <DrawerHeader>Chakra UI Assignment</DrawerHeader>


    <DrawerBody>

     
    
    <Box mt="20px" width="100%"  display="flex" justifyContent="center">
        <Button data-cy = "home">Home</Button>
      </Box>
      

      <Box mt="20px" width="100%" display="flex" justifyContent="center">
        <Button data-cy = "gallery">Gallery</Button>
      </Box>

      <Box mt="20px" width="100% " display="flex" justifyContent="center" onClick={onModalOpen}>
        <Button  data-cy = "login">Login</Button>
      </Box>

      <Box mt="20px" width="100%" display="flex" justifyContent="center">
        <Button data-cy = "signup">SignUp</Button>
      </Box>

      <Box mt="20px" width="100%" display="flex" justifyContent="center">
        <Button data-cy = "about">About Us</Button>
      </Box>


    


    </DrawerBody>

  Chakra UI Drawer
</DrawerContent>

</Drawer>


    </div>
  )
}
