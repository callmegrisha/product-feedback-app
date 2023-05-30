import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const purple = defineStyle({
  padding: '16px 24px',
  border: 'none',
  borderRadius: '5px',
  backgroundColor: 'custom.linkWater',
  resize: 'none',
  height: '96px',
  fontSize: '15px',
  lineHeight: '22px',
  color: 'custom.eastBay',
  _focus: {
    border: '1px solid #4661e6',
  },
});

export const textareaTheme = defineStyleConfig({
  variants: { purple },
});
