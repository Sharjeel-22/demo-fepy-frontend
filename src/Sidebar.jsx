// Sidebar.js
import React from 'react';
import { Box, VStack, Text } from '@chakra-ui/react';

export const Sidebar = () => {
  return (
    <Box w="250px" bg="gray.200" h="100vh" p={4}>
      <VStack spacing={4}>
        <Text fontSize="xl">Item 1</Text>
        <Text fontSize="xl">Item 2</Text>
        <Text fontSize="xl">Item 3</Text>
      </VStack>
    </Box>
  );
};

