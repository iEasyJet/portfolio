import './About.css';
import ButtonUpLower from '../Others/ButtonUpLower/ButtonUpLower.js';
import { techs } from '../utils/const.js';

function About(props) {
  return (
    <section className='about'>
      <div className='about__wrapper'>
        <h3 className='about__title'>
          <span style={{ color: 'red' }}>Обо</span> мне
        </h3>
        <p className='about__text'>
          Я Junior FrontEnd-разработчик. Мой путь разработчика начался 2021
          года, когда я заинтересовался веб-разработкой и решил изучить HTML и
          CSS. Далее прошел курс "Веб-разработчик" на платформе
          Яндекс.Практикум, в процессе обучения был старшим студентов и помогал
          другим студентам. Я сохраняю постоянное стремление оттачивать свои
          навыки и идти в ногу с постоянно меняющимися тенденциями отрасли. Я
          доступен для любой возможности трудоустройства, которая соответствует
          моим интересам.
        </p>
      </div>
      <div className='about__wrapper'>
        <h3 className='about__title'>
          <span style={{ color: 'red' }}>Технологии</span> и инструменты
        </h3>
        <div className='about__tech-wrapper'>
          {techs.map((el, index) => (
            <div className='about__tech' key={index}>
              <img width='48' height='48' src={el.link} alt={el.name} />
              <p className='about__text'>{el.name}</p>
            </div>
          ))}
        </div>
      </div>
      <ButtonUpLower onClick={props.isMove} isLower={false} />
      <ButtonUpLower onClick={props.isMove} isLower={true} />
    </section>
  );
}

export default About;
