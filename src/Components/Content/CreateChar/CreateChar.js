import './styles.css';
import PostureSkin from './PostureSkin/PostureSkin';
import BodyParts from './BodyParts/BodyParts';

function CreateChar() {
  return (
    <section className="createchar-controller">
      <PostureSkin />
      <BodyParts />
    </section>
  );
}

export default CreateChar;
