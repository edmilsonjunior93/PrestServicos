import { Box, Button, Center, CheckIcon, Select } from 'native-base';
import React from 'react';

const FiltroPrestadores = () => {
  const [service, setService] = React.useState('');
  return (
    <Center>
      <Box w="3/4" maxW="300">
        <Select
          selectedValue={service}
          minWidth="200"
          accessibilityLabel="Choose Service"
          placeholder="Choose Service"
          _selectedItem={{
            bg: 'teal.600',
            endIcon: <CheckIcon size="5" />,
          }}
          mt={1}
          onValueChange={(itemValue) => setService(itemValue)}
        >
          <Select.Item label="UX Research" value="ux" />
          <Select.Item label="Web Development" value="web" />
          <Select.Item label="Cross Platform Development" value="cross" />
          <Select.Item label="UI Designing" value="ui" />
          <Select.Item label="Backend Development" value="backend" />
        </Select>
      </Box>
      <Box alignItems="center">
        <Button onPress={() => console.log('hello world')}>Click Me</Button>
      </Box>
      ;
    </Center>
  );
};

export default FiltroPrestadores;
