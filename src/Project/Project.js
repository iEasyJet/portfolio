import './Project.css';
import ButtonUpLower from '../Others/ButtonUpLower/ButtonUpLower';
import Card from '../Others/Card/Card';
import { projects } from '../utils/const';

function Project(props) {
  return (
    <section className='project'>
      <h3 className='project__title'>
        <span style={{ color: 'red' }}>Мои</span> проекты
      </h3>
      <div className='project__wrapper'>
        {projects.map((el, index) => (
          <Card
            title={el.title}
            img={el.img}
            linkView={el.linkView}
            linkGit={el.linkGit}
            key={index}
          />
        ))}
      </div>
      <ButtonUpLower onClick={props.isMove} isLower={false} />
    </section>
  );
}

export default Project;
