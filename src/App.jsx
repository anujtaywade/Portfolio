import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Skills from './pages/skills';
import Home from './pages/home';
import Experience from "./pages/Experience";
import Education from './pages/Education';
import Contact from './pages/Contact';

function App() {
 


  return (
<div className='min-h-screen bg-black text-white'>
<BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/Education" element={<Education />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>


</div>
 )
}


export default App
