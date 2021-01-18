import React from 'react';
import Images from './SVG/Stand/Images';

const Shoes = ({ color, name }) => {
  const Icon = Images[name];
  return (
    <Icon
      className="pic-absolute"
      title="Picture of shoes"
      fill={color}
    />
  );
};

export default Shoes;
