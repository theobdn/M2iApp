import React from 'react';
import './App.css';
import Button from '@mui/material/Button';
import { Navbar } from './Primary/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1>App page</h1>
      <Button variant='contained'>TEST</Button>
    </div>
  );
}

export default App;
