import React from 'react';
import Pokegame from './components/Pokegame'
import './styles/App.css'

function App() {
  return (
    <>
      <h1 className="text-center">Pokegame</h1>
      <div className='board'>
        <Pokegame />
      </div>
    </>
  );
}

export default App;
