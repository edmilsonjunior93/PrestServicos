import React from 'react';
import { Box, Center, Heading, HStack, Text, VStack } from 'native-base';
import { list } from '../components/Lista';

const ListaPrestadores = () => {
  return (
    <Center>
      <Box>
        <Heading>Prestadores</Heading>
        <VStack space={4}>
          <VStack space={2}>
            {list.map((item) => (
              <HStack key={item.nome}></HStack>
            ))}
          </VStack>
        </VStack>
      </Box>
    </Center>
  );
};

export default ListaPrestadores;
