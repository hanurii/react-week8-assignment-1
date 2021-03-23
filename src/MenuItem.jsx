import styled from '@emotion/styled';

const MenuItem = styled.li({
  marginRight: '2em',
  '& button': {
    color: '#FFF5BA',
    backgroundColor: '#FFABAB',
    textDecoration: 'none',
    border: 0,
    borderRadius: 5,
    cursor: 'pointer',
    '&:active': {
      color: '#FFABAB',
      backgroundColor: '#FFF5BA',
      textDecoration: 'none',
    },
  },
  '&:hover': {
    fontWeight: 'bold',
    color: '#F3FFE3',
  },
});

export default MenuItem;