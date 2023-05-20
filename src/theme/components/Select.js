import { selectAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(selectAnatomy.keys);

const filter = definePartsStyle({
  field: {
    fontWeight: 700,
    fontSize: '14px',
    lineHeight: '20px',
    color: '#f2f4fe',
    backgroundColor: '#373f68',
    padding: '0 30px 0 0',
    _focusWithin: {
      mixBlendMode: 'normal',
      color: 'rgba(242, 244, 254, 0.75)',
    },
  },
  icon: {
    marginTop: '2px',
    size: '6xl',
  },
  option: {
    backgroundColor: 'white',
    boxShadow: '0px 10px 40px -7px rgba(55, 63, 104, 0.350492)',
    borderRadius: '10px',
  },
});

export const selectTheme = defineMultiStyleConfig({ variants: { filter } });
