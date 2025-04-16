import './App.css'
import { createBrowserRouter } from 'react-router-dom';

import Navbar from './components/navbar';
import Skills from './pages/skills';
import Home from './pages/home';


function App() {

 

  return (
<div className='min-h-screen bg-black text-white'>
<Navbar></Navbar>
<Skills/>





</div>
 )
}

export default App
