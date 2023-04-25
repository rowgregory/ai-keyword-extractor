import React from 'react';
import { Heading, Text } from '@chakra-ui/react';

const Header = () => {
  return (
    <>
      <i className='fas fa-lightbulb fa-3x'></i>
      <Heading color='white' marginBottom='16px'>
        AI Keyword Extractor
      </Heading>
      <Text fontSize={25} textAlign='center'>
        Pase in your text below and we'll extract the keywords for you
      </Text>
    </>
  );
};

export default Header;
