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
      <Route exact path = '/about'>
        <About/>
      </Route>
      <Route exact path = '/users'>
        <Users/>
      </Route>
      <Route exact path = '/'>
        <Home/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
