import { ReactComponent as Stand1 } from './SVG/Stand/standing_2.svg';

const images = {
  figure_1: Stand1,
};

const Standing = ({ color, name }) => {
  const Icon = images[name];
  return (
    <Icon
      className="pic-absolute"
      title="Picture of figure standing"
      fill={color}
    />
  );
};
export default Standing;
