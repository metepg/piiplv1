import Button from './Button/Button';

function SkinButtons() {
  const colors = [
    '#EEBE8A',
    '#D5AC81',
    '#BD9A77',
    '#A4876E',
    '#8C7564',
    '#73635B',
    '#3D3D3D',
  ];
  const buttons = colors.map((color) => (
    <Button
      aria-label="Change color to"
      color={color}
      key={color}
    />
  ));

  return <>{buttons}</>;
}

export default SkinButtons;
