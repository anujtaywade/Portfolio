import React from 'react';
import { FaHtml5 ,FaPython ,FaCss3Alt, FaReact, FaWordpress} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb ,SiDavinciresolve} from "react-icons/si";



const Skills = () => {

    
    return (
        <div>
     <div> 
     <h1 className='text-5xl w-full flex justify-center pt-30  '> My <span className='ml-4 text-[#C81636]'>Skills</span></h1>
     </div>

     <div className='grid grid-cols-4 gap-4 pr-110 p-4 pl-150 pt-10'>   
     <div className="bg-[#222426] p-6 rounded-lg w-26 h-26 flex flex-col justify-center items-center pb-2 pt-2 transition-transform hover:scale-110 duration-300"><FaHtml5 className='size-26'/> <span class="text-white text-xs">HTML</span></div>
      <div className="bg-[#222426] p-6 rounded-lg w-26 h-26 flex flex-col justify-center items-center pb-2 pt-2 transition-transform hover:scale-110 duration-300"><FaCss3Alt className='size-26'/><span className='text-white text-xs'>CSS</span></div>
      <div className="bg-[#222426] p-6 rounded-lg w-26 h-26 flex flex-col justify-center items-center pb-2 pt-2 transition-transform hover:scale-110 duration-300"><IoLogoJavascript className='size-26'/><span className='text-xs '>JAVASCRIPT</span></div>
      <div className="bg-[#222426] p-6 rounded-lg w-26 h-26 flex flex-col justify-center items-center pb-2 pt-2 transition-transform hover:scale-110 duration-300"><FaPython className='size-26'/><span className='text-xs '>PYTHON</span></div>

        </div>

      <div className='grid grid-cols-3 gap-4 p-4 pr-150 p-4 pl-150 pt-5'>
         <div className="bg-[#222426] p-6 rounded-lg w-26 h-26 flex flex-col justify-center items-center pb-2 pt-2 transition-transform hover:scale-110 duration-300"><FaReact className='size-26'/><span className='text-xs'>REACT</span></div>
      <div className="bg-[#222426] p-6 rounded-lg w-26 h-26 flex flex-col justify-center items-center pb-2 pt-2 transition-transform hover:scale-110 duration-300"><RiTailwindCssFill className='size-26'/><span className='text-xs'>TAILWIND</span></div>
      </div>
     
     <div className='grid grid-cols-3 gap-4 p-4 pr-150 p-4 pl-150 pt-5'>
        <div className="bg-[#222426] p-6 rounded-lg w-26 h-26 flex flex-col justify-center items-center pb-2 pt-2 transition-transform hover:scale-110 duration-300"><SiDavinciresolve className='size-26'/><span className='text-xs'>DAVINCHI RESOLVE</span></div>
        <div className="bg-[#222426] p-6 rounded-lg w-26 h-26 flex flex-col justify-center items-center pb-2 pt-2 transition-transform hover:scale-110 duration-300"><FaWordpress className='size-26'/><span className='text-xs'>WORDPRESS</span></div>
     </div>
      
      
       <div className='grid grid-cols-3 gap-4 p-4 pr-110 p-4 pl-150 pt-5'> 
        <div className="bg-[#222426] p-6 rounded-lg w-26 h-26 flex flex-col justify-center items-center pb-2 pt-2 transition-transform hover:scale-110 duration-300"><SiMongodb className='size-26'/><span className='text-xs'>MONGODB</span></div>
       </div>
       
        </div>
        

        
    );
}

export default Skills;
