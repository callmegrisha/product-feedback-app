import { Box, Button, Icon, List, ListItem, Text } from '@chakra-ui/react';
import { HiCheck } from 'react-icons/hi';

import { dropdown, dropdownItem } from './styles';
import { useControlsSort } from './useControlsSort';

export const ControlsSort = () => {
  const [options, isOpen, selectedSort, handleOpenDropdown, handleSelectSort] =
    useControlsSort();

  return (
    <Box position='relative'>
      <Button
        type='button'
        variant='grey'
        onClick={handleOpenDropdown}
        maxW='none'
      >
        Sort by : {options[selectedSort].name}
      </Button>
      {isOpen && (
        <List {...dropdown}>
          {options.map((option) => (
            <ListItem
              key={option.id}
              textStyle='lgBody'
              color='custom.lynch'
              {...dropdownItem}
              onClick={() => handleSelectSort(option.id, option.value)}
            >
              <Text as='span'>{option.name}</Text>
              {selectedSort === option.id && (
                <Icon as={HiCheck} boxSize={5} color='custom.cornflowerBlue' />
              )}
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};
