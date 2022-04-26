import React, { useEffect } from 'react';
import hillImg from './molehill.png';

function EmptySlot(props) {
  useEffect(() => {
    let randomSeconds = Math.ceil(Math.random() * 3000);
    let timer = setTimeout(() => {
      props.setDisplayMole(true);
    }, randomSeconds);
    return () => clearTimeout(timer);
  });

  return (
    <div>
      <img style={{ width: '30vw' }} src={hillImg} alt='molehill' />
    </div>
  );
}

export default EmptySlot;
