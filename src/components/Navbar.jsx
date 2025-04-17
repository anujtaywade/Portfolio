import React from 'react';

import { Link } from 'react-router-dom';

const Navbar = () => { 

return (
    <div >
      <div className="text-2xl space-x-13 pt-10 absolute right-20 ">
      <Link to="/" className="inline-block hover:scale-110 hover:text-[#76B5CB] hover:underline transition-transform duration-300 ease-in-out" >Home</Link>
      <Link to="/skills" className="inline-block hover:scale-110 hover:text-[#76B5CB] hover:underline transition-transform duration-300 ease-in-out">Skills</Link>
        <Link  className="inline-block hover:scale-110 hover:text-[#76B5CB] hover:underline transition-transform duration-300 ease-in-out" to="/Education">Education</Link>
        <Link className="inline-block hover:scale-110 hover:text-[#76B5CB] hover:underline transition-transform duration-300 ease-in-out"  to="/Experience">Experience</Link>
        <Link className="inline-block hover:scale-110 hover:text-[#76B5CB] hover:underline transition-transform duration-300 ease-in-out" to="/Contact">Contact</Link>
      </div>  
    </div>
  );
} 

export default Navbar;
