import { Box, Button, Icon, List, ListItem, Text } from '@chakra-ui/react';
import { HiCheck } from 'react-icons/hi';

import { useState } from 'react';

import { dropdown, dropdownItem } from './styles';
import { useDispatch } from 'react-redux';
import { selectSortMethod } from '../../features/suggestions/suggestionsSlice';

const options = [
  { id: 0, name: 'Most Upvotes', value: 'mostUpvotes' },
  { id: 1, name: 'Least Upvotes', value: 'leastUpvotes' },
  { id: 2, name: 'Most Comments', value: 'mostComments' },
  { id: 3, name: 'Least Comments', value: 'leastComments' },
];

export const ControlsSort = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState(0);
  const dispatch = useDispatch();

  const handleOpenDropdown = () => setIsOpen(!isOpen);

  const handleSelectSort = (id, value) => {
    setSelectedSort(id);
    dispatch(selectSortMethod(value));
    setIsOpen(false);
  };

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
