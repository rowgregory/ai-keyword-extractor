import { Box, Text, Flex, Image } from '@chakra-ui/react';
import React from 'react';
import OpenAILogo from '../assets/openAILogo.png';

const Footer = () => {
  return (
    <Box marginTop={50}>
      <Flex justifyContent='center' alignItems='center'>
        <Image src={OpenAILogo} marginRight={1} width={10} />
        <Text>Powered by Open AI</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
