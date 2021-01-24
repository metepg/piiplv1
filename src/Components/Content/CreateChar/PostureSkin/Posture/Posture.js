import Button from 'react-bootstrap/Button';
import './styles.css';

function Posture() {
  return (
    <section className="posture-controller">
      <p>Posture</p>
      <Button onClick={() => console.log('JHEPA')} variant="primary">Sitting</Button>
      <Button variant="info">Standing</Button>
    </section>
  );
}

export default Posture;
