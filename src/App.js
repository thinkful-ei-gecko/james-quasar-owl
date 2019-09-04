import React from 'react';
import Stage from './Stage';
import Sidebar from './Sidebar';
import './App.css';

function App() {
  return (
    <main className='App'>
      <Sidebar />
      <Stage />
    </main>
  );
}

export default App;