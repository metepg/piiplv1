import './styles.css';
import Posture from './Posture/Posture';
import SkinColor from './SkinColor/SkinColor';

function PostureSkin() {
  return (
    <>
      <h2>Select posture and skin color</h2>
      <div className="postureskin-controller">
        <Posture />
        <SkinColor />
      </div>

    </>
  );
}

export default PostureSkin;
