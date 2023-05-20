import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: 'custom.linkWater',
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
      fontSize: '15px',
      lineHeight: '22px',
    },
    smBody: {
      fontWeight: 800,
      fontSize: '13px',
      lineHeight: '19px',
    },
  },
  components: {
    Button: {
      baseStyle: {
        padding: '12px',
        width: '100%',
        maxWidth: '158px',
        fontWeight: 700,
        fontSize: '14px',
        lineHeight: '20px',
        textAlign: 'center',
        borderRadius: '10px',
        color: '#f2f4fe',
      },
      variants: {
        purple: {
          bgColor: '#ad1fea',
          _hover: {
            bgColor: '#c75af6',
          },
        },
        blue: {
          bgColor: '#4661e6',
          _hover: {
            bgColor: '#7c91f9',
          },
        },
        grey: {
          bgColor: '#3a4374',
          _hover: {
            bgColor: '#656ea3',
          },
        },
        red: {
          bgColor: '#d73737',
          _hover: {
            bgColor: '#e98888',
          },
        },
        goBackNoBg: {
          color: '#647196',
          _hover: {
            textDecoration: 'underline',
          },
        },
        goBackNoBorder: {
          bgColor: '#373f68',
          _hover: {
            textDecoration: 'underline',
          },
        },
      },
    },
  },
});
