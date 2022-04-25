import "./App.css";
import Nav from './components/Nav';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/home";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import Project1 from './pages/portfolio/project1';
import Project2 from './pages/portfolio/project2';
import Project3 from './pages/portfolio/project3';

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/portfolio/mrp' element={<Project1 />} />
        <Route path='/portfolio/ureco' element={<Project2 />} />
        <Route path='/portfolio/personal' element={<Project3 />} />
      </Routes>
    </>
  );
}

export default App;
