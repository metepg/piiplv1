/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slider from 'react-slick';
import Button from 'react-bootstrap/Button';

function BodyPart({ images, name }) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
    cssEase: 'ease-out',
  };
  // Set image object as array and map through it
  const imagesArray = Object.entries(images);
  const thumbs = imagesArray.map((image) => {
    const Icon = image[1];
    return (
      <React.Fragment key={image[0]}>
        <Button
          aria-label="icon Button"
          variant="customBodyPart"
          value={image[0]}
          title={image[0]}
          onClick={(e) => console.log(e)}
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
        {thumbs}
      </Slider>
    </>
  );
}

export default BodyPart;
