import React from 'react';
import './styles.css';
import BodyPart from './BodyPart';
import Hair from '../../../../Images/Hair/Thumbnails/Thumbnails';
import UpperBody from '../../../../Images/Upper Body/Thumbnails/Thumbnails';
import LowerBody from '../../../../Images/Lower Body/Thumbnails/Thumbnails';
import Shoes from '../../../../Images/Shoes/Thumbnails/Thumbnails';

function BodyParts() {
  return (
    <section className="bodyparts-controller">
      <BodyPart name="Hair" images={Hair} id="hairName" />
      <BodyPart name="Upper Body" images={UpperBody} id="upperBodyName" />
      <BodyPart name="Lower Body" images={LowerBody} id="lowerBodyName" />
      <BodyPart name="Shoes" images={Shoes} id="shoesName" />
    </section>
  );
}

export default BodyParts;
