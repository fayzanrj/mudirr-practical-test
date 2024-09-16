import Loader from "@/components/home/Loader";
import { Flex } from "@chakra-ui/react";
import React from "react";

const loading = () => {
  return (
    <Flex justifyContent={"center"} alignItems={"center"} height={"100dvh"} width={"100vw"}>
      <Loader />
    </Flex>
  );
};

export default loading;
