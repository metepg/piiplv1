import React from 'react';
import Figure from './Figure/Standing';
import Hair from './Hair/Hair';
import UpperBody from './Upper Body/UpperBody';
import LowerBody from './Lower Body/LowerBody_stand';
import Shoes from './Shoes/Shoes_stnd';

const Standing = ({ options }) => {
  const {
    figureColor,
    hairColor,
    upperBodyColor,
    lowerBodyColor,
    shoesColor,
    figureName,
    hairName,
    upperBodyName,
    lowerBodyName,
    shoesName,
  } = options;
  return (
    <>
      <Figure color={figureColor} name={figureName} />
      <Hair color={hairColor} name={hairName} />
      <UpperBody
        color={upperBodyColor}
        name={upperBodyName}
      />
      <LowerBody
        color={lowerBodyColor}
        name={lowerBodyName}
      />
      <Shoes color={shoesColor} name={shoesName} />
    </>
  );
};

export default React.memo(Standing);
