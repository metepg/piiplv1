import React from 'react';
import Images from './SVG/Images';

const Hair = ({ color, name }) => {
  const Icon = Images[name];
  return (
    <Icon
      className="pic-absolute"
      title="Picture of hair"
      fill={color}
    />
  );
};

export default Hair;
