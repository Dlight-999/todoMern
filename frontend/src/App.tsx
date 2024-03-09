import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Add from './components/Add';



function App() {
  return (
  <section>
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/add' Component={Add}></Route>
      </Routes>
    </BrowserRouter>
  </section>
  );
}

export default App;
