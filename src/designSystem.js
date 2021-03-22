export const colors = {
  black: '#000',
  white: '#FFF',
  gray: '#797979',
  highlight: '#3082F6',
  border: '#D0D0CF',
};

export const styles = {
  screenReaderOnly: {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: 0,
    overflow: 'hidden',
    clip: 'rect(0,0,0,0)',
    whiteSpace: 'nowrap',
    WebkitClipPath: 'inset(50%)',
    clipPath: 'inset(50%)',
    border: 0,
  },
};

export const markerStyle = {
  '&:before': {
    display: 'inline-block',
    width: '.3em',
    height: '.3em',
    marginTop: '-.3em',
    marginLeft: '.2em',
    marginRight: '.6em',
    background: '#3082F6',
    verticalAlign: 'middle',
    content: '""',
  },
};