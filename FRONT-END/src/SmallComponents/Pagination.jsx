import { Box, Button } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

export const Pagination = ({ page, handelPage, total }) => {

  let arr = [];
  for (let i = 1; i <= total; i++) {
    arr.push(i);
  }

  return (
    <div>
      <Box display={"flex"} justifyContent={"center"} gap="20px">
        {arr.map((ele) => (
          <Button
            borderRadius={"50%"}
            backgroundColor={ele == page ? "blue.400" : "white"}
            onClick={() => handelPage(ele)}
            border="1px solid black"
          >
            {ele}
          </Button>
        ))}
      </Box>
    </div>
  );
};
