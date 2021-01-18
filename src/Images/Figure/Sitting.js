import React from 'react';
import { ReactComponent as Sit1 } from './SVG/Sit/sitting_1.svg';

const images = {
  figure_1: Sit1,
};

const Sitting = ({ color, name }) => {
  const Icon = images[name];
  return (
    <Icon
      className="pic-absolute"
      title="Picture of figure sitting"
      fill={color}
    />
  );
};

export default Sitting;
