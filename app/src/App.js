import { Route, Routes } from 'react-router-dom';
import { Nav } from './Component/Nav/Nav';
import { Home } from "./Pages/Home/Home"
import { About } from './Pages/About/About'
import { Contacts } from './Pages/Contact/Contacts'
import { Notfound } from './Component/Notfound/Notfound';
import './App.css';

function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/About" element = {<About/>}/>
        <Route path="/Contact/:id" element = {<Contacts/>}/>
        <Route path='*' element = {<Notfound/>}/>
      </Routes>
    </>
  );
}

export default App;
