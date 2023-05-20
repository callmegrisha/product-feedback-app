import { Box, Button, List, ListItem } from '@chakra-ui/react';
import { useState } from 'react';
import { dropdown, dropdownItem } from './styles';

const options = [
  { id: 1, name: 'Most Upvotes' },
  { id: 2, name: 'Least Upvotes' },
  { id: 3, name: 'Most Comments' },
  { id: 4, name: 'Least Comments' },
];

export const ControlsFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilter, setSelectedFilters] = useState(null);

  const handleOpenDropdown = () => setIsOpen(!isOpen);
  const handleSelectFilter = (id) => {
    setSelectedFilters(id);
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
        Sort by : {selectedFilter}
      </Button>
      {isOpen && (
        <List {...dropdown}>
          {options.map((option) => (
            <ListItem
              key={option.id}
              textStyle='lgBody'
              color='custom.lynch'
              {...dropdownItem}
              onClick={() => handleSelectFilter(option.name)}
            >
              {option.name}
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};
