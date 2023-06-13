import { inputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const purple = definePartsStyle({
  field: {
    padding: '12px 24px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: 'custom.linkWater',
    fontSize: '15px',
    lineHeight: '22px',
    color: 'custom.eastBay',
    cursor: 'pointer',
    _focus: {
      border: '1px solid #4661e6',
    },
  },
});

export const inputTheme = defineMultiStyleConfig({ variants: { purple } });
