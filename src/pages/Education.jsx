import React from 'react';
import { GraduationCap, School, BookOpen } from 'lucide-react';
const Education = () => {
    let data=[
        {
            title:'Bachelor of CSE ',
            branch:'[AI]',
            institute:'G.H. Raisoni Institute of Business Management',
            year:'2022-2026',
            icon:<GraduationCap size={70} className='text-white'/>
        },
        {
            title: ' Higher Secondary Education',
            institute: 'Alphonsa Sr. Sec ',
            break:'School',
            year: '2019-2020',
            icon: <School size={70} className="text-white" />,
        },
        {
            title: 'Secondary Education',
            institute: 'Alphonsa Sr. Sec ',
            break:'School',
            year: '2019 – 2020',
            icon: <BookOpen size={70} className="text-white" />,
        }
    ]

    return (
        <div className='min-h-screen px-10 py-16 bg-[#121212]'>
            <h1 className='text-center mt-16 text-5xl pb-20 pt-10'>
               Edu<span className='text-[#C81636]'>cation</span>
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 '>
              {data.map((item,id)=>(
                
                <div key={id} className='bg-[#1E1E1E] rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transition-transform hover:scale-105 duration-300  '>
                    
                    <div className='mb-0 p-4 rounded-full '>{item.icon}</div>
                    <h2 className='text-semibold text-3xl '>{item.title}</h2>
                    <h2 className='text-2xl'>{item.branch}</h2>
                    <h1 className='text-2xl'>{item.institute}</h1>
                    <p className='text-2xl'>{item.break}</p>
                    <div className='text-xl pt-2'>{item.year}</div>

                </div>
              ))}
            </div>

            
        </div>
    );
}

export default Education;
