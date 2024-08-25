import './App.css';
import Home from '../Home/Home';
import About from '../About/About';
import Project from '../Project/Project';
import { useState } from 'react';

function App() {
  const [move, setMove] = useState(0);

  function isMove(isLower) {
    isLower ? setMove((move) => move + -100) : setMove((move) => move + 100);
  }

  return (
    <section className="app" style={{ marginTop: move + 'vh' }}>
      <Home isMove={isMove} />
      <About isMove={isMove} />
      <Project isMove={isMove} />
    </section>
  );
}

export default App;
