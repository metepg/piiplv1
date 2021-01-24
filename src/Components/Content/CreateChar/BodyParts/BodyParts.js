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
      <BodyPart name="Hair" images={Hair} />
      <BodyPart name="Lower Body" images={UpperBody} />
      <BodyPart name="Upper Body" images={LowerBody} />
      <BodyPart name="Shoes" images={Shoes} />
    </section>
  );
}

export default BodyParts;
