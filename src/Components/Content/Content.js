import './styles.css';
import CreateChar from './CreateChar/CreateChar';
import Current from './Current/Current';
import { PiiplProvider } from '../../Context/Context';

function Content() {
  return (
    <main>
      <PiiplProvider>
        <CreateChar />
        <Current />
      </PiiplProvider>
    </main>
  );
}

export default Content;
