import React, {
  useRef,
  useLayoutEffect,
  useState,
  Fragment,
} from 'react';
import PropTypes from 'prop-types';
import {
  wrapperClass,
  containerClass,
  zoomStep,
  zoomMax,
  zoomMin,
  zoomDefault,
  controlsClass,
} from './zoomConstants';
import {
  classNames,
  throwError,
  getContainerStyles,
  getStyles,
} from './zoomUtils';

const Zoom = ({
  children,
  containerClassName,
  controlsClassName,
  maxZoom,
  minZoom,
  showControls,
  step,
  wrapperClassName,
}) => {
  if (!children) {
    throwError();
  }

  const [zoom, setZoom] = useState(zoomDefault);
  const wrapperRef = useRef(null);
  const containerRef = useRef(null);
  const originalSizes = useRef({});

  useLayoutEffect(() => {
    const zoomableNode = wrapperRef.current.firstChild;
    const containerStyles = getContainerStyles(zoomableNode.getBoundingClientRect());
    containerRef.current.style.width = containerStyles.width;
    containerRef.current.style.height = containerStyles.height;
    wrapperRef.current.style.transform = `scale(${zoom})`;
    wrapperRef.current.style.transformOrigin = '0 0';
    originalSizes.current = getStyles(zoomableNode.getBoundingClientRect());
  }, []);

  useLayoutEffect(() => {
    const containerStyles = getContainerStyles(originalSizes.current, zoom);
    containerRef.current.style.width = containerStyles.width;
    containerRef.current.style.height = containerStyles.height;
    wrapperRef.current.style.transform = `scale(${zoom})`;
    wrapperRef.current.style.transformOrigin = '0 0';
  }, [zoom]);

  const resetZoom = () => {
    setZoom(zoomDefault);
  };

  const decreaseZoom = () => {
    if (zoom > (minZoom)) {
      setZoom(parseFloat((zoom - step).toFixed(1)));
    }
  };

  const increaseZoom = () => {
    if (zoom < (maxZoom)) {
      setZoom(parseFloat((zoom + step).toFixed(1)));
    }
  };

  return (
    <Fragment>
      <div
        ref={containerRef}
        className={classNames(containerClass, containerClassName)}
      >
        <div
          ref={wrapperRef}
          className={classNames(wrapperClass, wrapperClassName)}
        >
          { children }
        </div>
      </div>
      {
        showControls
        && <div className={classNames(controlsClass, controlsClassName)}>
          <button
            onClick={resetZoom}
            type="button">Reset
          </button>
          <button
            onClick={decreaseZoom}
            type="button">Decrease
          </button>
          <button
            onClick={increaseZoom}
            type="button">Increase
          </button>
        </div>
      }
    </Fragment>
  );
};

Zoom.propTypes = {
  children: PropTypes.node,
  containerClassName: PropTypes.string,
  controlsClassName: PropTypes.string,
  maxZoom: PropTypes.number,
  minZoom: PropTypes.number,
  showControls: PropTypes.bool,
  step: PropTypes.number,
  wrapperClassName: PropTypes.string,
};

Zoom.defaultProps = {
  children: null,
  containerClassName: '',
  controlsClassName: '',
  maxZoom: zoomMax,
  minZoom: zoomMin,
  showControls: true,
  step: zoomStep,
  wrapperClassName: '',
};

export default Zoom;
