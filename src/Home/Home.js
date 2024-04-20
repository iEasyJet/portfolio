import './Home.css';
import ButtonUpLower from '../Others/ButtonUpLower/ButtonUpLower.js';

function Home(props) {
  return (
    <section className='home'>
      <h1 className='home__title'>
        <span style={{ color: 'red' }}>Привет!</span> Меня зовут Роман
        Березовский
      </h1>
      <h2 className='home__subtitle'>
        Я <span style={{ color: 'red' }}>Junior FrontEnd-разработчик</span>
      </h2>
      <div className='home__wrapper'>
        <a
          href='https://github.com/iEasyJet'
          className='home__link'
          target='__blank'
        >
          <img
            width='50px'
            height='50px'
            src='https://img.icons8.com/plasticine/100/github.png'
            alt='github'
            className='home__img'
          />
        </a>
        <a
          href='https://rostov.hh.ru/resume/87f613b1ff07b21c470039ed1f345566347733'
          className='home__link'
          target='__blank'
        >
          <img
            width='50px'
            height='50px'
            src='https://img.icons8.com/plasticine/100/resume.png'
            alt='resume'
            className='home__img'
          />
        </a>
      </div>
      <ButtonUpLower onClick={props.isMove} isLower={true} />
    </section>
  );
}

export default Home;
