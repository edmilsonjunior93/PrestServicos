import React, { useContext } from 'react';
import {
  Avatar,
  Box,
  Center,
  FlatList,
  Heading,
  HStack,
  Pressable,
  Spacer,
  Text,
  VStack,
} from 'native-base';
import PrestadoresContext from '../context/PrestadoresContext';

const ListaPrestadores = ({ navigation }) => {
  const { state } = useContext(PrestadoresContext);

  function getPrestItem({ item }) {
    return (
      <Box
        borderBottomWidth="1"
        _dark={{
          borderColor: 'muted.50',
        }}
        borderColor="muted.800"
        pl={['0', '4']}
        pr={['0', '5']}
        py="2"
      >
        <Pressable onPress={() => navigation.navigate('Prestador')}>
          <HStack space={[2, 3]} justifyContent="space-between">
            <Avatar
              size="48px"
              source={{
                uri: item.avatarUrl,
              }}
            />
            <VStack>
              <Text
                _dark={{
                  color: 'warmGray.50',
                }}
                color="coolGray.800"
                bold
              >
                {item.nome}
              </Text>
              <Text
                color="coolGray.600"
                _dark={{
                  color: 'warmGray.200',
                }}
              >
                {item.email}
              </Text>
            </VStack>
            <Spacer />
            <Text
              fontSize="xs"
              _dark={{
                color: 'warmGray.50',
              }}
              color="coolGray.800"
              alignSelf="flex-start"
            >
              {item.celular}
            </Text>
          </HStack>
        </Pressable>
      </Box>
    );
  }

  return (
    <Box>
      <Center>
        <Heading>Prestadores</Heading>
        <FlatList
          keyExtractor={(Prestadores) => Prestadores.nome}
          data={state.Prestadores}
          renderItem={getPrestItem}
          w="90%"
        />
      </Center>
    </Box>
  );
};

export default ListaPrestadores;
