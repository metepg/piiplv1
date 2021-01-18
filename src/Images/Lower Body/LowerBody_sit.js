import React from 'react';
import { ReactComponent as Pants1 } from './SVG/Sit/pants_1.svg';

const images = {
  pants_1: Pants1,
};

const LowerBody = ({ color, name }) => {
  const Icon = images[name];
  return (
    <Icon
      className="pic-absolute"
      title="Picture of lower body"
      fill={color}
    />
  );
};

export default LowerBody;
