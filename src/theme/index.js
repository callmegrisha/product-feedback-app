import { extendTheme } from '@chakra-ui/react';

import { buttonTheme } from './components/Button';
import { selectTheme } from './components/Select';
import { textareaTheme } from './components/Textarea';
import { inputTheme } from './components/Input';

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: 'custom.linkWater',
      },
      '.replies': {
        marginLeft: '20px',
        paddingLeft: '24px',
        position: 'relative',
        display: 'grid',
        gap: '32px',
        _before: {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '1px',
          height: '100%',
          backgroundColor: 'rgba(100, 113, 150, 0.1)',
        },
      },
      '.reply-btn': {
        fontWeight: '600',
        textStyle: 'smBody',
        color: 'custom.royalBlue',
        _hover: { textDecoration: 'underline' },
      },
      '.block-wrapper': {
        backgroundColor: 'white',
        borderRadius: '10px',
        padding: '28px 32px',
      },
      '.label, .label-description': {
        fontSize: '14px',
        lineHeight: '20px',
      },
      '.label': {
        fontWeight: 700,
        letterSpacing: '-0.2px',
        color: 'custom.eastBay !important',
        margin: '0 0 2px 0 !important',
      },
      '.label-description': {
        fontWeight: 400,
        color: 'custom.lynch !important',
        margin: '0 0 16px 0 !important',
      },
    },
  },
  fonts: {
    heading: `'Jost', sans-serif`,
    body: `'Jost', sans-serif`,
  },
  colors: {
    custom: {
      cornflowerBlue: '#ad1fea',
      royalBlue: '#4661e6',
      rhino: '#373f68',
      zircon: '#f2f4ff',
      linkWater: '#f7f8fd',
      eastBay: '#3a4374',
      lynch: '#647196',
      tacao: '#f49f85',
      malibu: '#62bcfa',
    },
  },
  textStyles: {
    h1: {
      fontWeight: 700,
      fontSize: '24px',
      lineHeight: '35px',
      letterSpacing: '-0.33px',
    },
    h2: {
      fontWeight: 700,
      fontSize: '20px',
      lineHeight: '29px',
      letterSpacing: '-0.25px',
    },
    h3: {
      fontWeight: 700,
      fontSize: '18px',
      lineHeight: '26px',
      letterSpacing: '-0.25px',
    },
    h4: {
      fontWeight: 700,
      fontSize: '14px',
      lineHeight: '20px',
      letterSpacing: '-0.2px',
    },
    lgBody: {
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '23px',
    },
    mdBody: {
      fontWeight: 400,
      fontSize: ['13px', '13px', '15px', '15px'],
      lineHeight: ['19px', '19px', '22px', '22px'],
    },
    smBody: {
      fontWeight: 800,
      fontSize: '13px',
      lineHeight: '19px',
    },
  },
  components: {
    Button: buttonTheme,
    Select: selectTheme,
    Textarea: textareaTheme,
    Input: inputTheme,
  },
});
