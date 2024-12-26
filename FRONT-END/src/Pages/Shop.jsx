import {
  Image,
  Box,
  Text,
  Flex,
  Button,
  Spinner,
  Center,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { CoffeCard } from "../SmallComponents/CoffeCard";
import axios from "axios";
import { Pagination } from "../SmallComponents/Pagination";
import { Footer } from "./Footer";

export const Shop = () => {
  let [order, setOrder] = useState("");

  let [category, setCategory] = useState("");

  let [data, setData] = useState([]);

  let [load, setLoad] = useState(false);

  let [page, setPage] = useState(1);

  let [total, setTotal] = useState(0);

  let getApi = (url, category, order) => {
    if (category) {
      return (url = `${url}&category=${category}`);
    }
    if (order) {
      return (url = `${url}&_sort=price&_order=${order}`);
    }
    if (category && order) {
      return (url = `${url}&category=${category}&_sort=price&_order=${order}`);
    }

    return url;
  };

  let handleCategory = (value)=>{
    setPage(1)
    setCategory(value)
  }

  let fetchData = () => {
    setLoad(true);

    let api = getApi(
      `https://bialetti-backend.onrender.com/coffee?_limit=6&_page=${page}`,
      category,
      order
    );

    axios.get(api).then((res) => {
      setLoad(false);
      let result = res?.data.coffee;
      let data = res.data.totalCount;
      let val = Math.ceil(data / 6);
      setData(result);
      setTotal(val);
    });
  };

  let handelPage = (val) => {
    setPage(val);
  };

  useEffect(() => {
    fetchData();
  }, [category, order, page]);

  return (
    <div>
     <Box
        backgroundImage="https://www.bialetti.com/media/wysiwyg/banner-listato-natale-desktop-def.jpg"
        backgroundRepeat={"no-repeat"}
        backgroundSize={"100% 500px"}
        h="400px"
        backgroundPosition={"center"}
      >
        <Box
          color="white"
          fontWeight={"bold"}
          fontSize={"40px"}
          position={"absolute"}
          top="10%"
          left="8%"
        >
          <Text>The essence of</Text>
          <Text>Italian coffee culture.</Text>
        </Box>
      </Box>

      <Box mt="30px" w="80%">
        <Flex justifyContent={"space-evenly"}>
          <Button
            _hover={{
              borderRadius: "25px",
              backgroundColor: "#C93809",
              color: "white",
            }}
            backgroundColor={"white"}
            color={"black"}
            borderRadius={"none"}
            onClick={() => handleCategory("")}
          >
            ALL
          </Button>
          <Button
            _hover={{
              borderRadius: "25px",
              backgroundColor: "#C93809",
              color: "white",
            }}
            backgroundColor={"white"}
            color={"black"}
            borderRadius={"none"}
            onClick={() => handleCategory("Coffee Maker")}
          >
            COFFEE MACHINE
          </Button>
          <Button
            _hover={{
              borderRadius: "25px",
              backgroundColor: "#C93809",
              color: "white",
            }}
            backgroundColor={"white"}
            color={"black"}
            borderRadius={"none"}
            onClick={() => handleCategory("Bialetti system capsules ")}
          >
            BIALETTI CAPSULES
          </Button>
          <Button
            _hover={{
              borderRadius: "25px",
              backgroundColor: "#C93809",
              color: "white",
            }}
            backgroundColor={"white"}
            color={"black"}
            borderRadius={"none"}
            onClick={() => handleCategory("Ground")}
          >
            GROUND COFFEE
          </Button>
          <Button
            _hover={{
              borderRadius: "25px",
              backgroundColor: "#C93809",
              color: "white",
            }}
            backgroundColor={"white"}
            color={"black"}
            borderRadius={"none"}
            onClick={() => handleCategory("Espresso Machines")}
          >
            {" "}
            ESPRESSO MACHINES
          </Button>
          <Button
            _hover={{
              borderRadius: "25px",
              backgroundColor: "#C93809",
              color: "white",
            }}
            backgroundColor={"white"}
            color={"black"}
            borderRadius={"none"}
            onClick={() => handleCategory("Coffee accessories")}
          >
            COFFEE ACCESSORIES
          </Button>
        </Flex>
      </Box>
      <hr />

      <Box ml="100px">
        <select
          style={{
            marginTop: "20px",
            fontSize: "14px",
            fontWeight: "-moz-initial",
          }}
          name="price"
          onChange={(e) => setOrder(e.target.value)}
        >
          <option value="" style={{ border: "none" }}>
            SORTING
          </option>
          <option value="asc">Low To High</option>
          <option value="desc">High To Low</option>
        </select>

        <Box mt="30px">
          <Text fontWeight={"bold"} fontSize={"30px"}>
            COFFEE
          </Text>

          <Text fontWeight={"light"} fontSize={"12px"} mt={"5px"}>
            A PERFECT COMBINATION OF FLAVORS AND AROMAS
          </Text>
        </Box>
      </Box>

      <Box bg="#E0D5C5" mt="50px" padding={"20px"}>
        <Box
          mt="30px"
          w="95%"
          display={"grid"}
          gridRowGap={"50px"}
          gridTemplateColumns={"1fr 1fr 1fr"}
          ml="80px"
        >
          {load ? (
            <Center>
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
              />
            </Center>
          ) : (
            <>
              {data.map((ele) => (
                <CoffeCard {...ele} />
              ))}
            </>
          )}
        </Box>
      </Box>

      <Box mt="80px">
        {/* pagination */}
        <Pagination page={page} handelPage={handelPage} total={total} />
      </Box>

      <Box my="80px">
        <Footer />
      </Box>
    </div>
  );
};
