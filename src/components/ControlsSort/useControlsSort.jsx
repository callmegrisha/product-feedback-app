import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { selectSortMethod } from '../../features/suggestions/suggestionsSlice';

export const useControlsSort = () => {
  const options = [
    { id: 0, name: 'Most Upvotes', value: 'mostUpvotes' },
    { id: 1, name: 'Least Upvotes', value: 'leastUpvotes' },
    { id: 2, name: 'Most Comments', value: 'mostComments' },
    { id: 3, name: 'Least Comments', value: 'leastComments' },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState(0);
  const dispatch = useDispatch();

  const handleOpenDropdown = () => setIsOpen(!isOpen);

  const handleSelectSort = (id, value) => {
    setSelectedSort(id);
    dispatch(selectSortMethod(value));
    setIsOpen(false);
  };

  return [options, isOpen, selectedSort, handleOpenDropdown, handleSelectSort];
};
