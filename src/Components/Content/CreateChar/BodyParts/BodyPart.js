/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from 'react';
import Slider from 'react-slick';
import Button from 'react-bootstrap/Button';
import { PiiplContext } from '../../../../Context/Context';

function BodyPart({ images, name, id }) {
  // Settings for slider
  const settings = {
    dots: true,
    infinite: false,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 5,
    adaptiveHeight: true,
    cssEase: 'ease-out',
  };

  const { changeShape } = useContext(PiiplContext);

  // Set image object as array and map through it
  // Image[0] = picture name
  const imagesArray = Object.entries(images);
  const thumbNails = imagesArray.map((image) => {
    const Icon = image[1];
    return (
      <React.Fragment key={image[0]}>
        <Button
          aria-label="icon Button"
          variant="customBodyPart"
          id={id}
          value={image[0]}
          onClick={(e) => changeShape(e)}
        >
          <Icon style={{ pointerEvents: 'none' }} width="70px" />
          <br />
          <label htmlFor="name" style={{ pointerEvents: 'none' }}>
            {image[0]}
          </label>
        </Button>
      </React.Fragment>
    );
  });
  return (
    <>
      <h4>{name}</h4>
      <Slider {...settings}>
        {thumbNails}
      </Slider>
    </>
  );
}

export default BodyPart;
