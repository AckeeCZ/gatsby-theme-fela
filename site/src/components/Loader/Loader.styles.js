export const loader = () => ({
    position: 'relative',
    top: 0,
    left: 0,
    background: 'white',
    height: '100%',
    minHeight: '4rem',
    width: '100%',
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
});

export const text = () => ({
    marginTop: '0.5rem',
});

export const loaderElement = ({ animationName }) => ({
    width: '3rem',
    height: '3rem',
    background: 'tomato',
    animation: `2000ms ${animationName} infinite`,
});
