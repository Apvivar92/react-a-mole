import './App.css';
import React, { useState } from 'react';
import MoleContainer from './MoleContainer';

function App() {
  let [score, setScore] = useState(0);

  const createMoleHill = () => {
    let hills = [];
    for (let i = 0; i < 9; i++) {
      hills.push(<MoleContainer key={i} setScore={setScore} score={score} />);
    }
    return <div className='gameScreen'>{hills}</div>;
  };

  return (
    <div className='App'>
      <h1>React-A-Mole!!</h1>
      <h2>Your Score!!</h2>
      <h2>{score}</h2>
      <MoleContainer />
      {createMoleHill()}
    </div>
  );
}

export default App;
