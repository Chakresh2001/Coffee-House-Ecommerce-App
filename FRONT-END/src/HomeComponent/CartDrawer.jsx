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
  Center,
} from "@chakra-ui/react";
import { CartItemDrawer } from "../SmallComponents/CartItemDrawer";

export const CartDrawer = ({ isOpen, onClose }) => {
  return (
    <div>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        data-cy="chakra-drawer"
      >
        <DrawerContent maxW={"25rem"}>
          <DrawerCloseButton color={"white"}></DrawerCloseButton>
          <DrawerHeader bg="#220E08" color="white" textAlign={"center"}>
            MY CART
          </DrawerHeader>
          <DrawerBody>
            <CartItemDrawer onClose={onClose} />
          </DrawerBody>
          Chakra UI Drawer
        </DrawerContent>
      </Drawer>
    </div>
  );
};
