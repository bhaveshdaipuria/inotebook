import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Home/>
    </BrowserRouter>
    <Routes>
      <Route path = '/about'>
        <About/>
      </Route>
      <Route path = '/users'>
        <Users/>
      </Route>
      <Route path = '/'>
        <Home/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
