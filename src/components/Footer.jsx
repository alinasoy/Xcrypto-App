import { Box, Flex, Button, Text, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from 'react-router-dom';



const Footer = () => {
  return (
    <Box 
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
       <Flex align="center" justify="center">
        <Text>Copyright © 2023 Crypto App.All Rights Reserved.
        <Text fontSize='2s'  align="center" justify="center">Developed by Alina</Text>
          <HStack justify="center">
            <Button variant={"unstyles"} color={"white"}>
              <Link to="/">Home</Link>
            </Button>
            <Button variant={"unstyles"} color={"white"}>
             <Link to="/exchanges">Exchanges</Link>
            </Button>
            <Button variant={"unstyles"} color={"white"}>
              <Link to="/coins">Coins</Link>
            </Button>
          </HStack>
          </Text>
      </Flex>
    </Box>
  );
};


export default Footer;