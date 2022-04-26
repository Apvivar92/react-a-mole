import React, { useEffect } from 'react';
import moleImg from './mole.png';

function Mole(props) {
  useEffect(() => {
    let randomSeconds = Math.ceil(Math.random() * 3000);
    let timer = setTimeout(() => {
      props.setDisplayMole(false);
    }, randomSeconds);
    return () => clearTimeout(timer);
  });
  return (
    <img
      style={{ width: '30vw' }}
      src={moleImg}
      alt='mole'
      onClick={props.moleBoop}
    />
  );
}

export default Mole;
