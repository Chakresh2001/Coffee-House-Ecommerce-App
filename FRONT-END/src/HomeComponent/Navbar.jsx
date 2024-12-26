import {
  Box,
  Flex,
  Text,
  Image,
  Button,
  useDisclosure,
  Center,
  useToast,
  Input,
} from "@chakra-ui/react";

import React, { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { CartDrawer } from "./CartDrawer";

import { Menu, MenuButton, MenuList } from "@chakra-ui/react";
import { AuthContext } from "../AuthContectProvider/AuthContextProvider";

export const Navbar = () => {
  let { isOpen, onOpen, onClose } = useDisclosure();

  let { isAuth, isAuthFalse } = useContext(AuthContext);

  const toast = useToast();

  let handelLogout = () => {
    isAuthFalse();
    toast({
      title: "LOGGED OUT",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <div>
      <Box>
        <Flex justifyContent={"center"} gap="10px" bg="black" color={"white"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-truck"
          >
            <rect x="1" y="3" width="15" height="13"></rect>
            <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
            <circle cx="5.5" cy="18.5" r="2.5"></circle>
            <circle cx="18.5" cy="18.5" r="2.5"></circle>
          </svg>
          Free shipping for orders over 59,90€
        </Flex>
      </Box>
      <Box boxShadow={'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'}>
        <Flex alignItems={'center'} justifyContent={'space-between'}>
          <Box>
            <Link to='/'>
            <Image
              src="https://getvectorlogo.com/wp-content/uploads/2020/06/bialetti-vector-logo.png"
              w="150px"
            />
            </Link>
          </Box>
          <Flex justifyContent={"space-evenly"} mt='20px' width={'50%'}>
            <Link to="/MokaExpress">
              <Text>MOKA EXPRESS</Text>
            </Link>
            <Link to="/shop">
              <Text>SHOP</Text>
            </Link>
            <Link to="/News&Blog">
              <Text>NEWS & BLOGS</Text>
            </Link>
            <Link to="/About">
              <Text>ABOUT</Text>
            </Link>
          </Flex>
          <Flex justifyContent={'space-between'} w='10%'>
            <Link to={"/wishlist"}>
              <svg
                style={{ marginTop: "6px" }}
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                rokeWidth="2"
                kelinecap="round"
                rokeLinejoin="round"
                className="feather feather-heart"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </Link>
            <Menu>
              <MenuButton>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginTop: "6px" }}
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  rokeWidth="2"
                  kelinecap="round"
                  rokeLinejoin="round"
                  className="feather feather-user"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </MenuButton>
              <MenuList
                gap="5px"
                borderTopRightRadius={"25px"}
                borderBottomLeftRadius={"25px"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Link to="/login">
                  <Button
                    display={isAuth ? "none" : "block"}
                    color={"red"}
                    bg="white"
                    border={"1px solid red"}
                    _hover={{ bg: "red", color: "white" }}
                    borderRadius={"25px"}
                  >
                    Login
                  </Button>
                </Link>

                <Link to="/account">
                  <Box>
                    <Button
                      borderRadius={"25px"}
                      bg="white"
                      border="1px solid red"
                      _hover={{ bg: "red", color: "white" }}
                      color="red"
                    >
                      My Account
                    </Button>
                  </Box>
                </Link>

                <Box>
                  <Button
                    display={!isAuth ? "none" : "block"}
                    border={"1px solid red"}
                    bg="white"
                    _hover={{ bg: "red", color: "white" }}
                    borderRadius={"25px"}
                    color="red"
                    onClick={handelLogout}
                  >
                    LOGOUT
                  </Button>
                </Box>
              </MenuList>
            </Menu>

            <svg
              onClick={onOpen}
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginTop: "6px" }}
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              rokeWidth="2"
              kelinecap="round"
              rokeLinejoin="round"
              className="feather feather-shopping-bag"
            >
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
          </Flex>
        </Flex>
      </Box>

      <CartDrawer isOpen={isOpen} onClose={onClose} />
    </div>
  );
};
{
  /* <Image objectFit={"cover"} src="https://www.bialetti.com/media/catalog/product/cache/e8aa104d064dcf81ed9afb1c9c6893f4/s/u/super_laterale_panna.png" width="100%"/> */
}
{
  /* <Image src="https://images.unsplash.com/photo-1607681034540-2c46cc71896d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/> */
}
