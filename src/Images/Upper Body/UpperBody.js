import React from 'react';
import Images from './SVG/Images';

const UpperBody = ({ color, name }) => {
  const Icon = Images[name];
  return (
    <Icon
      className="pic-absolute"
      title="Picture of upper body"
      fill={color}
    />
  );
};

export default UpperBody;
