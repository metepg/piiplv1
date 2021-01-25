import { Button } from 'react-bootstrap';
import React, { useContext } from 'react';
import { PiiplContext } from '../../../../../../../Context/Context';

function ButtonColor({ color }) {
  const { changeColor } = useContext(PiiplContext);
  return (
    <Button
      aria-label="Change color to"
      onClick={(e) => changeColor(e)}
      variant="custom"
      value={color}
      id="figureColor"
      style={{
        backgroundColor: color,
        width: '35px',
        height: '35px',
        borderRadius: '50%',
        marginLeft: '5px',
      }}
    />
  );
}

export default ButtonColor;
