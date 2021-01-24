import { Button } from 'react-bootstrap';

function ButtonColor({ color }) {
  return (
    <Button
      aria-label="Change color to"
      onClick={() => console.log('JEPA')}
      variant="custom"
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
