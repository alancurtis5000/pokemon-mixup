import React from 'react';
import PropTypes from 'prop-types';

const LogoPokemonMixupInitals = (props) => {
  const { fill1, fill2, fill3, height, width, className } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 291.24 220.59"
      height={height}
      width={width}
      className={className}
    >
      <path
        fill={fill1}
        d="M118.64 168.4l32.48-153.99 11.22-6.63 41.74 9.5 4.2-10.64L219.5 0l38.14 9.31 33.6 204.64-11.22 6.64-65.5-16.82-4.97-19.59-11.23 6.64-6.38-16.04-11.22 6.63-62.08-13.01z"
      />
      <path
        fill={fill2}
        d="M129.87 161.76L162.34 7.78l52.97 2.86L219.5 0l49.36 2.67 22.38 211.28-65.49-16.82-4.26-32.83-11.94 19.88-15.1-33.41-2.51 24.01-62.07-13.02z"
      />
      <path
        fill={fill3}
        d="M145.37 154.64l27.56-134.11 39.32 2.02 8.43 38.12 9.22-48.3 30.69 1.49 14.91 182.72-39.06-6.84-8.46-58.86-16.2 30.4-18.4-46.66-9.22 47.99-38.79-7.97z"
      />
      <path
        d="M10.68 27.99L.03 35.27l28.21 54.74 11.32-3 43 125.35 47.25-11.82 10.68-7.27"
        fill={fill1}
      />
      <path
        d="M167.75 36.44c-7.83-15.18-24.74-25.73-46.46-32.65-43.92-14-110.61 24.2-110.61 24.2L38.9 82.74l11.31-3 43 125.34 47.25-11.81-11.66-71.33s18.37-3.37 33.38-25.12c7.85-11.46 15.66-40.75 5.57-60.38zm-57.45 67.47l-6.75-47.79s29.87-8.36 35.05 12.18-28.3 35.61-28.3 35.61z"
        fill={fill2}
      />
      <path
        d="M159.81 44.41c-6.75-13-17.34-23.38-35.52-29.3-36.78-11.99-95.86 16.5-95.86 16.5L43.49 65.1l14.22-1.74 44.94 125.53 24.71-6.82-10.33-64.2s26.27-11.8 38.9-30.64c6.69-9.92 10.79-29.54 3.88-42.82zm-49.51 59.5l-6.75-47.79s29.87-8.36 35.05 12.18-28.3 35.61-28.3 35.61z"
        fill={fill3}
      />
      <path
        d="M138.56 68.61c5.18 20.55-28.3 35.61-28.3 35.61l-6.75-47.8s29.87-8.37 35.05 12.19zm-22.73-4.05L119.66 89s14.93-9.7 10.75-19.11c-2.92-6.61-14.58-5.34-14.58-5.34z"
        fill={fill2}
      />
    </svg>
  );
};

LogoPokemonMixupInitals.defaultProps = {
  fill1: '#1d2c5e',
  fill2: '#3c5aa6',
  fill3: '#ffcb05',
  height: '50px',
  width: undefined,
  className: undefined,
};

LogoPokemonMixupInitals.prototype = {
  fill1: PropTypes.string,
  fill2: PropTypes.string,
  fill3: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  className: PropTypes.string,
};

export default LogoPokemonMixupInitals;
