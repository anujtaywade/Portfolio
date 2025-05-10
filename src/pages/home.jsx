import React from 'react';
import { Instagram } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Github } from 'lucide-react';
import { Twitter } from 'lucide-react';
const Home = () => {

    let handlelinkdin=()=>{
        window.location.href="https://www.linkedin.com/in/anuj-taywade-326881270/"
      }
      
      let handleGithub=()=>{
        window.location.href="https://github.com/anujtaywade"
      }
      
      let handleInstagram=()=>{
        window.location.href="https://www.instagram.com/anuj_taywade07/"
      }
      
      let handleTwitter=()=>{
        window.location.href="https://x.com/AnujTaywade"
      }
      
    
    return (
        <div className='className="flex justify-between items-center px-10 py-2 text-white bg-black pr-25'>
        <div className="text-4xl text-[#76B5CB] pt-13 px-35 ">
        <span className='text-5xl'>A</span> <span className='text-[#C81636]'>folio</span>
      </div>

      
      <div className='size-140 ml-65  '>
        <img src="/portfolio_pfp.jpg" alt="" style={{
    borderRadius: "49% 51% 53% 47% / 48% 48% 52% 52%   "
  }} />
      </div>

      <div className='px-100 absolute top-1/2  right-20 transform -translate-y-1/2 pb-40 pr-30'>
        <h1 className='text-5xl font-'>
          Hi, It's <span className='text-[#C81636]'>Anuj</span> <br/> <span className='mt-5 block'> I'm a <span className='text-[#C81636]'>Frontend</span> Developer</span>
        </h1>
        <span className='mt-6 block '><p className='absolute right '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur atque ipsum ut asperiores et magnam, cum at repudiandae in molestiae mollitia doloribus earum tempora voluptatum? Reiciendis sequi quisquam ducimus aperiam laboriosam iusto voluptas error porro quasi, rerum ex illum quia adipisci dolorem deleniti necessitatibus delectus harum vero eius! Dolorum, commodi.</p></span>
      </div>

      <div className=' absolute bottom-1/4 right-110 flex gap-10 '>
        <button onClick={handlelinkdin} className='hover:scale-110 hover:text-[#76B5CB] transition-transform duration-300 ease-in-out rounded-full px-2 py-2 bg-[#C81636] text-white'><Linkedin /></button>
        <button onClick={handleGithub} className='hover:scale-110 hover:text-[#76B5CB] transition-transform duration-300 ease-in-out rounded-full px-2 py-2 bg-[#C81636]'><Github/></button>
        <button onClick={handleInstagram} className='hover:scale-110 hover:text-[#76B5CB] transition-transform duration-300 ease-in-out rounded-full px-2 py-2 bg-[#C81636]'><Instagram /></button>
        <button onClick={handleTwitter} className='hover:scale-110 hover:text-[#76B5CB] transition-transform duration-300 ease-in-out rounded-full px-2 py-2 bg-[#C81636] '><Twitter /></button>
      </div>

        </div>
    );
}

export default Home;
