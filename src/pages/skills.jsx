import React from 'react';

const Skills = () => {

    
    return (
        <div>
     <div> 
     <h1 className='text-5xl w-full flex justify-center pt-40  '> My <span className='ml-4 text-[#C81636]'>Skills</span></h1>
     </div>

     <div className='grid grid-cols-3 gap-4 p-4 '></div>
     <div className="bg-[#222426] p-6 rounded-lg w-30 h-30"><img src="/html5.svg" alt="" /></div>
      <div className="bg-[#222426] p-6 rounded-lg w-30 h-30"><img src="/css.svg" alt="" /></div>
      <div className="bg-[#222426] p-6 rounded-lg w-30 h-30">Item 3</div>
      <div className="bg-[#222426] p-6 rounded-lg w-30 h-30">Item 4</div>
      <div className="bg-[#222426] p-6 rounded-lg w-30 h-30">Item 5</div>
      <div className="bg-[#222426] p-6 rounded-lg w-30 h-30">Item 6</div>
        </div>

        
    );
}

export default Skills;
