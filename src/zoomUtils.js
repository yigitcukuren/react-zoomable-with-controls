export const classNames = (...args) => {
  return args.filter(f => f).join(' ');
};

export const throwError = () => {
  throw new TypeError('You need to specify a zoomable element/component.');
};

export const getStyles = boundingClientRect => {
  const { height, width } = boundingClientRect;
  return {
    height,
    width,
  };
};

export const getContainerStyles = (boundingClientRect, zoom) => {
  const styles = getStyles(boundingClientRect);
  return Object.keys(styles).reduce((acc, curr) => {
    acc[curr] = `${styles[curr] * zoom}px`;
    return acc;
  }, {});
};
