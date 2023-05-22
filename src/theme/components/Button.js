export const buttonTheme = {
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
      fontSize: ['13px', '13px', '14px', '14px'],
      lineHeight: 1,
      _hover: {
        bgColor: '#c75af6',
      },
    },
    blue: {
      bgColor: '#4661e6',
      fontSize: ['13px', '13px', '14px', '14px'],
      lineHeight: 1,
      _hover: {
        bgColor: '#7c91f9',
      },
    },
    grey: {
      bgColor: '#3a4374',
      fontSize: ['13px', '13px', '14px', '14px'],
      lineHeight: 1,
      _hover: {
        bgColor: '#656ea3',
      },
    },
    red: {
      bgColor: '#d73737',
      fontSize: ['13px', '13px', '14px', '14px'],
      lineHeight: 1,
      _hover: {
        bgColor: '#e98888',
      },
    },
    goBackNoBg: {
      color: '#647196',
      fontSize: ['13px', '13px', '14px', '14px'],
      lineHeight: 1,
      _hover: {
        textDecoration: 'underline',
      },
    },
    goBackNoBorder: {
      bgColor: '#373f68',
      fontSize: ['13px', '13px', '14px', '14px'],
      lineHeight: 1,
      _hover: {
        textDecoration: 'underline',
      },
    },
    up: {
      width: 'auto',
      height: 'auto',
      padding: '8px 9px',
      fontWeight: 700,
      fontSize: '13px',
      lineHeight: '19px',
      letterSpacing: '-0.180556px',
      display: 'flex',
      flexDirection: 'column',
      alignSelf: 'flex-start',
      borderRadius: '10px',
      backgroundColor: '#f2f4fe',
      color: 'custom.eastBay',
      svg: {
        fill: 'custom.royalBlue',
        marginBottom: '3px',
      },
      _hover: {
        backgroundColor: '#cfd7ff',
      },
      _active: {
        backgroundColor: 'custom.royalBlue',
        color: 'white',
        svg: {
          fill: 'white',
        },
      },
    },
  },
};
