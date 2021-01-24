import './styles.css';
import Saved from './Saved/Saved';
import Standing from '../../../Images/Standing';

const options = {
  figureColor: '#A4876E',
  hairColor: '#3D3D3D',
  upperBodyColor: '#5e4fa0',
  lowerBodyColor: '#e2c15a',
  shoesColor: '#3d3d3d',
  figureName: 'figure_1',
  hairName: 'hair_2',
  upperBodyName: 'shirt_1',
  lowerBodyName: 'pants_1',
  shoesName: 'shoes_3',
};

function Current() {
  return (
    <section className="current-controller">
      <figure className="current">
        <Standing options={options} />
      </figure>
      <Saved />
    </section>
  );
}

export default Current;
