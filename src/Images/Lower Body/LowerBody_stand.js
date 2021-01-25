import React from 'react';
import { ReactComponent as Pants1 } from './SVG/Stand/pants_1.svg';
import { ReactComponent as Pants2 } from './SVG/Stand/pants_2.svg';
import { ReactComponent as Pants3 } from './SVG/Stand/pants_3.svg';
import { ReactComponent as Pants4 } from './SVG/Stand/pants_4.svg';
import { ReactComponent as Pants5 } from './SVG/Stand/pants_5.svg';

const images = {
  pants_1: Pants1,
  pants_2: Pants2,
  pants_3: Pants3,
  pants_4: Pants4,
  pants_5: Pants5,
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
