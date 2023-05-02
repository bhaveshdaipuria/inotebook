import './App.css';
import Navbar from './components/Navbar';
import {Home}  from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Home/>
      <Routes>
      <Route exact path = '/'>
        <Home/>
      </Route>
      <Route exact path = '/about'>
        <About/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
