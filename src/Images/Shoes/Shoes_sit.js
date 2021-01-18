import React from 'react';
import { ReactComponent as Style } from './SVG/Sit/basic_sit.svg';

const Shoes = ({ color }) => (
  <Style
    className="pic-absolute"
    title="Picture of shoes"
    fill={color}
  />
);

export default Shoes;
