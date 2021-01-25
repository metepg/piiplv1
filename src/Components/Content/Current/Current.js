import './styles.css';
import { useContext } from 'react';
import Saved from './Saved/Saved';
import Standing from '../../../Images/Standing';
import { PiiplContext } from '../../../Context/Context';

function Current() {
  const { options } = useContext(PiiplContext);

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
