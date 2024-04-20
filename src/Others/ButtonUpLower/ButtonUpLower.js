import './ButtonUpLower.css';

function ButtonUpLower(props) {
  function onClick() {
    props.onClick(props.isLower);
  }
  return props.isLower ? (
    <button
      type='button'
      className={`button-next ${
        props.isLower ? 'button-next_top-lower' : 'button-next_top-up'
      }`}
      onClick={onClick}
    >
      &#10515;
    </button>
  ) : (
    <button
      type='button'
      className={`button-next ${
        props.isLower ? 'button-next_top-lower' : 'button-next_top-up'
      }`}
      onClick={onClick}
    >
      &#10514;
    </button>
  );
}

export default ButtonUpLower;
