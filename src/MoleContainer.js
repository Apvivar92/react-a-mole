import React, { useState } from 'react';
import Mole from './Mole';
import EmptySlot from './EmptySlot';

function MoleContainer(props) {
  let [displayMole, setDisplayMole] = useState(false);

  function moleBoop() {
    if (displayMole) {
      props.setScore(props.score + 1);
      setDisplayMole(false);
    }
  }

  const moleOrHill = () => {
    return !displayMole ? (
      <EmptySlot setDisplayMole={setDisplayMole} onClick={moleBoop} />
    ) : (
      <Mole setDisplayMole={setDisplayMole} onClick={moleBoop} />
    );
  };

  return (
    <div className='molebooped' onClick={moleBoop}>
      {moleOrHill()}
    </div>
  );
}

export default MoleContainer;
