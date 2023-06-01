export const suggestionWrap = {
  flexDirection: 'row',
  flexWrap: ['wrap', 'wrap', 'nowrap', 'nowrap'],
};

export const upvote = {
  order: ['1', '1', '0', '0'],
  flexBasis: ['50%', '50%', 'auto', 'auto'],
  marginRight: [0, 0, '30px', '30px'],
};

export const upvoteBtn = {
  flexDirection: ['row', 'row', 'column', 'column'],
  gap: ['10px', '10px', '8px', '8px'],
};

export const suggestionText = {
  flexBasis: ['100%', '100%', 'auto', 'auto'],
  marginBottom: ['16px', '16px', 0, 0],
};

export const suggestionComments = {
  alignItems: 'center',
  justifyContent: ['flex-end', 'flex-end', 'flex-start', 'flex-start'],
  marginLeft: [0, 0, 'auto', 'auto'],
  order: ['1', '1', '0', '0'],
  flexBasis: ['50%', '50%', 'auto', 'auto'],
};

export const suggestionCat = {
  color: '#4661e6',
  backgroundColor: '#f2f4ff',
  borderRadius: '10px',
  padding: '6px 16px',
  fontWeight: 600,
};
