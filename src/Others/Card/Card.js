import './Card.css';

function Card(props) {
  return (
    <div
      className='project__card'
      style={{
        background: 'url(' + props.img + ')',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className='project__back-card'>
        <h3 className='project_card-title'>{props.title}</h3>
        <div className='project__link-wrapper'>
          <a href={props.linkView} className='project__link' target='__blank'>
            <img
              width='48px'
              height='48px'
              src='https://img.icons8.com/ios-glyphs/48/000000/iris-scan--v2.png'
              alt='view'
              className='project__link-img'
            />
          </a>
          <a href={props.linkGit} className='project__link' target='__blank'>
            <img
              width='48px'
              height='48px'
              src='https://img.icons8.com/sf-black/48/github.png'
              alt='github'
              className='project__link-img'
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
