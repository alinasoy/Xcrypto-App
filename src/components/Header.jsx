import { Button, HStack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <HStack 
     p={"4"} 
     shadow={"base"} 
     bgColor={"blackAlpha.900"}>
      <Button 
        variant={"unstyles"} 
        color={"white"}
        _hover={{ 
          color: 'yellow.500',
          textDecoration: "underline" }}
      >
        <Link to="/">Home</Link>
      </Button>
      <Button 
      variant={"unstyles"} 
      color={"white"}  
      _hover={{ 
      color: 'yellow.500',
      textDecoration: "underline" }}>
        <Link to="/exchanges">Exchanges</Link>
      </Button>
      <Button 
        variant={"unstyles"} 
        color={"white"}  
        _hover={{ 
        color: 'yellow.500',
        textDecoration: "underline" }}
      >
        <Link to="/coins">Coins</Link>
      </Button>
    </HStack>
  );
}

export default Header






