import React from 'react';
import ReactLoading from 'react-loading';

const LoadingBackground = ({ className }) => (
  <div className={className || 'loading-background'}>
    <ReactLoading type="spin" color="#DDD" width={50} height={50} className="loading-spinner" />
  </div>
);

export default LoadingBackground;